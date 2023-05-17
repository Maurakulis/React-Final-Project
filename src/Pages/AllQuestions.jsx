import { useContext } from "react"
import QuestionsContext from "../contexts/QuestionsContext"
import Question from "../UI/Question"
import UsersContext from "../contexts/UsersContext"

const AllQuestions = () => {
  const { questions } = useContext(QuestionsContext)
  const { currentUser } = useContext(UsersContext)

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
