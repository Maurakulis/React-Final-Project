import { useContext, useState } from "react"
import UsersContext from "../contexts/UsersContext"
import QuestionsContext from "../contexts/QuestionsContext"
import { QuestionActionType } from "../contexts/constants"

const QuestionMenu = ({ question }) => {
  const [menuIsPressed, setMenuIsPressed] = useState(false)
  const { currentUser } = useContext(UsersContext)
  const { dispatch } = useContext(QuestionsContext)

  const deleteQuestion = () => {
    dispatch({
      type: QuestionActionType.DELETE,
      id: question.id
    })
    setMenuIsPressed(!menuIsPressed)
  }

  const editQuestion = () => {
    console.log('edited')
    setMenuIsPressed(!menuIsPressed)
  }

  return (
    <>
      {
        currentUser && question.creatorId === currentUser.id &&
        <i className="fa-solid fa-ellipsis" onClick={() => setMenuIsPressed(!menuIsPressed)}></i>
      }
      {
        menuIsPressed &&
        <div className="userMenu">
          <button onClick={() => editQuestion()}>Edit</button>
          <div></div>
          <button onClick={() => deleteQuestion()}>Delete</button>
        </div>
      }
    </>
  )
}

export default QuestionMenu