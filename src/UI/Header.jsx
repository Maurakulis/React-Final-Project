import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img src="/stonks.png" alt="" />
        </div>
        <ul>
          <li><Link to='/'>Sign In</Link></li>
          <li><Link to='/allQuestions'>All questions</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header