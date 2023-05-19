import UserInfo from "./UserInfo"
import Vote from "./Vote"

const Answer = ({ answer }) => {

  return (
    <section>
      <div>
        <Vote data={answer} />
      </div>
      <div>
        <p>{answer.text}</p>
        <p>{answer.questionId}</p>
      </div>
      <div>
        <UserInfo data={answer} />

      </div>
    </section>
  )
}

export default Answer