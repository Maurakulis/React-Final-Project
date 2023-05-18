import './styles/App.css'
import LoginAndRegister from './Pages/LoginAndRegister'
import { Route, Routes, useNavigate } from 'react-router'
import { useContext } from 'react'
import UsersContext from './contexts/UsersContext'
import AllQuestions from './Pages/AllQuestions'
import Header from './UI/Header'
import NewQuestion from './Pages/NewQuestion'

const App = () => {
  const { currentUser } = useContext(UsersContext)
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<LoginAndRegister />} />
        <Route path='allQuestions' element={<AllQuestions />} />
        {
          currentUser ?
            <Route path='newQuestion' element={<NewQuestion />} /> :
            navigate(-1)
        }
      </Routes >
    </>
  )
}

export default App
