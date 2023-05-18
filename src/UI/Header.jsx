import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import UsersContext from "../contexts/UsersContext"

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext)

  return (
    <header>
      <nav>
        <div>
          <Link to='/allQuestions'>
            <img src="/stonks.png" alt="" />
          </Link>
        </div>
        <ul>
          {
            !currentUser ?
              <li><NavLink to='/'>Sign In</NavLink></li> :
              <li onClick={() => {
                setCurrentUser(null)
              }}><a>Log Out</a></li>
          }
          <li><NavLink to='/allQuestions'>All questions</NavLink></li>
          <li>
            {
              currentUser &&
              <div>
                {currentUser.imageUrl ?
                  <img src={currentUser.imageUrl} alt="" /> :
                  <div className="image">
                    <span>{currentUser.name.slice(0, 1)}</span>
                  </div>
                }
              </div>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header