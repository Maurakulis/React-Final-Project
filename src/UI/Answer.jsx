import { useContext } from "react"
import UserInfo from "./UserInfo"
import Vote from "./Vote"
import UsersContext from "../contexts/UsersContext"
import AnswerMenu from "./AnswerMenu"

const Answer = ({ answer }) => {
  const { currentUser } = useContext(UsersContext)

  return (
    <div className="answer">
      <div>
        <h2>Answer</h2>
        {
          currentUser && currentUser.id === answer.creatorId &&
          <AnswerMenu answer={answer}></AnswerMenu>
        }
      </div>
      <div className="answerInfo">
        <Vote data={answer} />
        <div>
          <p>{answer.text}</p>
        </div>
      </div>
      <UserInfo data={answer} />
    </div>
  )
}

export default Answer