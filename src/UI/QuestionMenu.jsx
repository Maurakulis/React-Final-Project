import { useContext, useState } from "react"
import UsersContext from "../contexts/UsersContext"

const QuestionMenu = ({ question }) => {
  const [menuIsPressed, setMenuIsPressed] = useState(false)
  const { currentUser } = useContext(UsersContext)

  return (
    <>
      {
        currentUser && question.creatorId === currentUser.id &&
        <i className="fa-solid fa-ellipsis" onClick={() => setMenuIsPressed(!menuIsPressed)}></i>
      }
      {
        menuIsPressed &&
        <div className="userMenu">
          <button>Edit</button>
          <div></div>
          <button>Delete</button>
        </div>
      }
    </>
  )
}

export default QuestionMenu