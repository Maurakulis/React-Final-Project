import { Link } from "react-router-dom"
import Vote from "./Vote"
import UserInfo from "./UserInfo"
import QuestionMenu from "./QuestionMenu"
import { useContext } from "react"
import UsersContext from "../contexts/UsersContext"



const Question = ({ question }) => {
  const { currentUser } = useContext(UsersContext)

  const date = new Date(question.dateCreated).toISOString().slice(0, 10)
  const time = new Date(question.dateCreated).toISOString().slice(11, 16)

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
          <p>{question.text.slice(0, 220)}... (<Link to={`/questions/${question.id}`}>more</Link>) </p>
        </div>
      </div>
      <p className="date">Created: {date + ' ' + time}</p>
    </div>
  )
}

export default Question