import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { DATA } from "../contexts/QuestionsContext"
import QuestionForAnswers from "../UI/QuestionForAnswers"

const SpecificQuestion = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState()

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA + '/' + id)
      const data = await res.json()
      setQuestion(data)
    })()
  }, [])

  return (
    <main className="specQuestion">
      <section>
        {
          question ?
            <QuestionForAnswers question={question} />
            : <p>loading... 🐌</p>
        }
      </section>
      <section>

        <p>hello</p>
        <p>hello</p>
      </section>
    </main>
  )
}

export default SpecificQuestion