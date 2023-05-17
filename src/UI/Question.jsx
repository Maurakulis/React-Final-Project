import { Link } from "react-router-dom"
import Vote from "./Vote"
import { useContext, useState } from "react"
import UsersContext from "../contexts/UsersContext"
import QuestionsContext from "../contexts/QuestionsContext"
import { QuestionActionType } from "../contexts/constants"
import QuestionMenu from "./QuestionMenu"

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
        <QuestionMenu question={question}></QuestionMenu>

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