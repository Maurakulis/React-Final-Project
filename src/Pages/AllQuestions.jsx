import { useContext } from "react"
import QuestionsContext from "../contexts/QuestionsContext"
import Question from "../UI/Question"

const AllQuestions = () => {
  const { questions } = useContext(QuestionsContext)

  return (
    <main>
      {
        Array.isArray(questions) && questions.length > 0 &&
        <section className="allQuestions">
          {
            questions.map(question =>
              <Question question={question} key={question.id}></Question>)
          }
        </section>
      }
    </main>
  )
}

export default AllQuestions
