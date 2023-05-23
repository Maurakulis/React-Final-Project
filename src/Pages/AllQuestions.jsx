import { useContext, useState } from "react"
import QuestionsContext from "../contexts/QuestionsContext"
import Question from "../UI/Question"
import AnswersContext from "../contexts/AnswersContext"

const AllQuestions = () => {
  const { questions } = useContext(QuestionsContext)
  const { answers } = useContext(AnswersContext)
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

    const rndArray = [1, 2, 1, 1, 1, 3, 2, 3]
    rndArray.sort()
    // const questionIdArray = answers.map(answer => answer.questionId)
    let currentValue = null
    let counter = 0
    for (let i = 0; i < rndArray.length; i++) {
      if (rndArray[i] !== currentValue) {
        if (counter > 0) {
          console.log(currentValue + ' times:' + counter)
        }
        currentValue = rndArray[i]
        counter = 1
      } else {
        counter++
      }
    }
    if (counter > 0) {
      console.log(currentValue + ' times:' + counter)

    }

    console.log(counter)
    switch (buttonPressed) {
      case 'most_answers':
        return questions
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
        <button onClick={() => { }}>↓ Answers</button>
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
