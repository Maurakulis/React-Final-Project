import { useContext, useState } from "react"
import UsersContext from "../contexts/UsersContext"
import QuestionsContext from "../contexts/QuestionsContext"
import { QuestionActionType } from "../contexts/constants"
import { useNavigate } from "react-router-dom"

const Vote = ({ data }) => {
  const { currentUser } = useContext(UsersContext)
  const { dispatch } = useContext(QuestionsContext)
  const [votes, setVotes] = useState(data.votes)
  const navigate = useNavigate()

  const voteUp = () => {
    handleVote(1)
  }

  const voteDown = () => {
    handleVote(-1)
  }

  const handleVote = (vote) => {
    const votesCopy = [...votes]
    let isDuplicate = false

    for (let i = 0; i < votesCopy.length; i++) {
      if (votesCopy[i].userId === currentUser.id) {
        isDuplicate = true

        if (vote === votesCopy[i].vote) {
          votesCopy[i].vote = 0
        } else {
          votesCopy[i].vote = vote
        }
        break
      }
    }

    if (!isDuplicate) {
      votesCopy.push({
        userId: currentUser.id,
        vote
      })
    }

    setVotes(votesCopy)

    dispatch({
      type: QuestionActionType.EDIT,
      id: data.id,
      data: {
        votes: votesCopy
      }
    })
  }

  const getVotesSum = () => votes.reduce((sum, v) => sum + v.vote, 0)


  return (
    <div className="vote">
      <i className="fa-solid fa-angle-up" onClick={
        currentUser ? () => voteUp() : () => navigate('/')
      }></i>
      <span>{getVotesSum()}</span>
      <i className="fa-solid fa-angle-down" onClick={
        currentUser ? () => voteDown() : () => navigate('/')
      }></i>
    </div>
  )
}

export default Vote