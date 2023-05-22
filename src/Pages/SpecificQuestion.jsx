import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import QuestionForAnswers from "../UI/QuestionForAnswers"
import { DATA } from "../contexts/constants"
import AnswersContext from "../contexts/AnswersContext"
import Answer from "../UI/Answer"
import AddAnswer from "../UI/AddAnswer"

const SpecificQuestion = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState()
  const { answers } = useContext(AnswersContext)

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
      {
        Array.isArray(answers) && answers.length > 0 &&
        <>
          {
            answers.map(answer => {
              if (answer.questionId === id) {
                return <Answer answer={answer} key={answer.id}></Answer>
              }
            })
          }
        </>
      }
      <section>
        <AddAnswer />
      </section>
    </main>
  )
}

export default SpecificQuestion