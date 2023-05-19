import { useContext, useState } from "react"
import UsersContext from "../contexts/UsersContext"

const Vote = ({ data }) => {
  const { currentUser } = useContext(UsersContext)
  const [isFailedVote, setIsFailedvote] = useState(false)
  const voteUp = () => {
    console.log('voteUp')
  }
  const voteDown = () => {
    console.log('voteDown')

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