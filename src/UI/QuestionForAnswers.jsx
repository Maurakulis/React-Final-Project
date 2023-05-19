import Vote from "./Vote"
import UserInfo from "./UserInfo"


const QuestionForAnswers = ({ question }) => {


  return (
    // <div className="question specificQuestion">
    <div>
      <h2>{question.title}</h2>
      <div className="questionInfo">
        <Vote data={question} />
        <div>
          <p>{question.text}</p>
        </div>
      </div>
      <UserInfo data={question} />
    </div>
  )
}

export default QuestionForAnswers