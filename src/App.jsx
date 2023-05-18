import './styles/App.css'
import LoginAndRegister from './Pages/LoginAndRegister'
import { Route, Routes } from 'react-router'
import { useContext } from 'react'
import UsersContext from './contexts/UsersContext'
import AllQuestions from './Pages/AllQuestions'
import Header from './UI/Header'
import NewQuestion from './Pages/NewQuestion'

const App = () => {
  const { currentUser } = useContext(UsersContext)

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<LoginAndRegister />} />
        <Route path='allQuestions' element={<AllQuestions />} />
        {
          currentUser &&
          <Route path='newQuestion' element={<NewQuestion />} />
        }
      </Routes >
    </>
  )
}

export default App
