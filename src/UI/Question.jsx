import { Link } from "react-router-dom"
import Vote from "./Vote"
import UserInfo from "./UserInfo"
import QuestionMenu from "./QuestionMenu"
import { useContext } from "react"
import UsersContext from "../contexts/UsersContext"


const Question = ({ question }) => {
  const { currentUser } = useContext(UsersContext)

  return (
    <div className="question">
      <div>
        <UserInfo data={question} />
        {
          currentUser &&
          <QuestionMenu question={question}></QuestionMenu>

        }
      </div>
      <div className="questionInfo">
        <Vote data={question} />
        <div>
          <Link to={`/questions/${question.id}`}><h2>{question.title}</h2></Link>
          <p>{question.text.slice(0, 220)}... (<Link>more</Link>) </p>
        </div>
      </div>
    </div>
  )
}

export default Question