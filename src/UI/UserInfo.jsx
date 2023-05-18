import QuestionMenu from "./QuestionMenu"
import { useContext } from "react"
import UsersContext from "../contexts/UsersContext"

const UserInfo = ({ question }) => {
  const { users } = useContext(UsersContext)

  const user = users.find(e => e.id === question.creatorId)

  return (
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
  )
}

export default UserInfo