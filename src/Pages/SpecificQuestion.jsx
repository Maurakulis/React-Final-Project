import { useEffect, useState } from "react"
import { useParams } from "react-router"
import QuestionForAnswers from "../UI/QuestionForAnswers"
import { DATA } from "../contexts/constants"

const SpecificQuestion = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState()

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA.QUESTIONS + '/' + id)
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
      </section>
    </main>
  )
}

export default SpecificQuestion