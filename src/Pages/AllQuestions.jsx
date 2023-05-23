import { useContext, useState } from "react"
import QuestionsContext from "../contexts/QuestionsContext"
import Question from "../UI/Question"

const AllQuestions = () => {
  const { questions } = useContext(QuestionsContext)
  const [buttonPressed, setButtonPressed] = useState(null)

  const mostAnswers = () => {
    setButtonPressed('most_answers')
  }
  const leastAnswers = () => {
    setButtonPressed('least_answers')
  }
  const sortByNewest = () => {
    setButtonPressed('newest')
  }

  const sortByOldest = () => {
    setButtonPressed('oldest')
  }

  const all = () => {
    setButtonPressed(null)
  }

  const getSortedQuestions = () => {
    const questionsCopy = [...questions]

    switch (buttonPressed) {
      case 'most_answers':
        return questionsCopy.sort((a, b) => b.answerCount - a.answerCount)
      case 'least_answers':
        return questionsCopy.sort((a, b) => a.answerCount - b.answerCount)
      case 'newest':
        return questionsCopy.sort((a, b) => b.dateCreated - a.dateCreated)
      case 'oldest':
        return questionsCopy.sort((a, b) => a.dateCreated - b.dateCreated)
      default:
        return questions
    }
  }

  return (
    <main className="allQuestions">
      <section className="sorting">
        <button onClick={() => leastAnswers()}>↓ Answers</button>
        <button onClick={() => mostAnswers()}>↑ Answers</button>
        <button onClick={() => sortByNewest()}>Newest</button>
        <button onClick={() => sortByOldest()}>Oldest</button>
        <button onClick={() => all()}>All</button>
      </section>
      {
        Array.isArray(questions) && questions.length > 0 &&
        <section className="allQuestions">
          {
            getSortedQuestions().map(question =>
              <Question question={question} key={question.id}></Question>)
          }
        </section>
      }
    </main>
  )
}

export default AllQuestions
