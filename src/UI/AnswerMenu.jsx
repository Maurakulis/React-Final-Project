import { useContext, useState } from "react"
import AnswersContext from "../contexts/AnswersContext"
import { AnswerActionType } from "../contexts/constants"
import { useNavigate } from "react-router-dom"

const AnswerMenu = ({ answer }) => {
  const [menuIsPressed, setMenuIsPressed] = useState(false)
  const { dispatch } = useContext(AnswersContext)
  const navigate = useNavigate()

  const editAnswer = () => {
    navigate(`/answer/edit/${answer.id}`)
    setMenuIsPressed(!menuIsPressed)
  }

  const deleteAnswer = () => {
    dispatch({
      type: AnswerActionType.DELETE,
      id: answer.id
    })
    setMenuIsPressed(!menuIsPressed)

  }

  return (
    <>
      <i className="fa-solid fa-ellipsis" onClick={() => setMenuIsPressed(!menuIsPressed)}></i>
      {
        menuIsPressed &&
        <div className="answerMenu">
          <button onClick={() => editAnswer()}>Edit</button>
          <div></div>
          <button onClick={() => deleteAnswer()}>Delete</button>
        </div>
      }
    </>
  )
}

export default AnswerMenu