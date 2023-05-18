import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to='/allQuestions'>
            <img src="/stonks.png" alt="" />
          </Link>
        </div>
        <ul>
          <li><NavLink to='/'>Sign In</NavLink></li>
          <li><NavLink to='/allQuestions'>All questions</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header