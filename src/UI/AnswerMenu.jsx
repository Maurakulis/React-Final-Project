import { useContext, useState } from "react"
import AnswersContext from "../contexts/AnswersContext"

const AnswerMenu = () => {
  const [menuIsPressed, setMenuIsPressed] = useState(false)
  const { dispatch } = useContext(AnswersContext)

  const editAnswer = () => {
    console.log('edited')
    setMenuIsPressed(!menuIsPressed)

  }

  const deleteAnswer = () => {
    console.log('deleted')
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