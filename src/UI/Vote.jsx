const Vote = ({ data }) => {
  return (
    <div className="vote">
      <i className="fa-solid fa-angle-up"></i>
      <span>{data.votes}</span>
      <i className="fa-solid fa-angle-down"></i>
    </div>
  )
}

export default Vote