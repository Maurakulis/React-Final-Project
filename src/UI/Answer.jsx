import UserInfo from "./UserInfo"
import Vote from "./Vote"

const Answer = ({ answer }) => {

  return (
    <div className="answer">
      <h2>Answer</h2>
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