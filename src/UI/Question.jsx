import { Link } from "react-router-dom"
import Vote from "./Vote"
import UserInfo from "./UserInfo"


const Question = ({ question }) => {


  return (
    <div className="question">
      <UserInfo question={question} />
      <div className="questionInfo">
        <Vote question={question} />
        <div>
          <Link to={`/questions/${question.id}`}><h2>{question.title}</h2></Link>
          <p>{question.text.slice(0, 220)}... (<Link>more</Link>) </p>
        </div>
      </div>
    </div>
  )
}

export default Question