import Vote from "./Vote"
import UserInfo from "./UserInfo"


const QuestionForAnswers = ({ question }) => {


  return (
    // <div className="question specificQuestion">
    <div>
      <h2>{question.title}</h2>
      <div className="questionInfo">
        <Vote question={question} />
        <div>
          <p>{question.text}</p>
        </div>
      </div>
      <UserInfo question={question} />
    </div>
  )
}

export default QuestionForAnswers