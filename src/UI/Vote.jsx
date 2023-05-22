import { useContext, useState } from "react"
import UsersContext from "../contexts/UsersContext"
import QuestionsContext from "../contexts/QuestionsContext"
import { QuestionActionType } from "../contexts/constants"

const Vote = ({ data }) => {
  const { currentUser } = useContext(UsersContext)
  const { dispatch } = useContext(QuestionsContext)
  const [isFailedVote, setIsFailedvote] = useState(false)
  const [vote, setVote] = useState(data.votes)

  const voteUp = () => {
    // dispatch({
    //   type: QuestionActionType.EDIT,
    //   id: data.id,
    //   data: data.votes + 1
    // })
  }
  const voteDown = () => {
    setVote(vote - 1)
    console.log(vote)
    dispatch({
      type: QuestionActionType.EDIT,
      id: data.id,
      data: vote
    })

  }

  return (
    <div className="vote">
      <i className="fa-solid fa-angle-up" onClick={
        currentUser ? () => voteUp() : () => { setIsFailedvote(true) }
      }></i>
      <span>{data.votes}</span>
      <i className="fa-solid fa-angle-down" onClick={() => voteDown()}></i>
      {
        isFailedVote &&
        <div className="voteError">
          <p>Vote can only registred users</p>
          <i className="fa-solid fa-xmark" onClick={() => setIsFailedvote(false)}></i>
        </div>
      }
    </div>
  )
}

export default Vote