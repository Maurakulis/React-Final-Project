import { Link } from "react-router-dom"
import Vote from "./Vote"
import { useContext } from "react"
import UsersContext from "../contexts/UsersContext"

import QuestionMenu from "./QuestionMenu"

const Question = ({ question }) => {
  const { users } = useContext(UsersContext)


  const user = users.find(e => e.id === question.creatorId)

  return (
    <div className="question">
      <div className="userInfo">
        {
          users.length &&
          <>
            {
              user.imageUrl ?
                <div>
                  <img src={user.imageUrl} alt="" />
                </div> :
                <div>
                  <div className="image">
                    <span>{user.name.slice(0, 1)}</span>
                  </div>
                </div>
            }
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