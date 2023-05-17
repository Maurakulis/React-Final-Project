const Vote = ({ question }) => {
  return (
    <div className="vote">
      <i className="fa-solid fa-angle-up"></i>
      <span>{question.votes}</span>
      <i className="fa-solid fa-angle-down"></i>
    </div>
  )
}

export default Vote