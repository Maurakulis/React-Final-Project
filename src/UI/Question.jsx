import { Link } from "react-router-dom"
import Vote from "./Vote"
import { useContext } from "react"
import UsersContext from "../contexts/UsersContext"
import QuestionsContext from "../contexts/QuestionsContext"
import { QuestionActionType } from "../contexts/constants"

const Question = ({ question }) => {
  const { users, currentUser } = useContext(UsersContext)
  const { dispatch } = useContext(QuestionsContext)

  const user = users.find(e => e.id === question.creatorId)

  return (
    <div className="question">
      <div className="userInfo">
        {
          users.length &&
          <>
            <div>
              <img src={user.imageUrl} alt="" />
            </div>
            <div>
              <span>{user.name}</span>
              <span>{user.career}</span>
            </div>
          </>
        }
        {
          currentUser && question.creatorId === currentUser.id &&
          <i className="fa-solid fa-ellipsis"></i>
        }
      </div>
      <div className="questionInfo">
        <Vote question={question} />
        <div>
          <Link to=""><h2>{question.title}</h2></Link>
          <p>{question.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Question