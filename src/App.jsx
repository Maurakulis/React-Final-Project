import './styles/App.css'
import LoginAndRegister from './Pages/LoginAndRegister'
import { Route, Routes } from 'react-router'
import { useContext } from 'react'
import UsersContext from './contexts/UsersContext'
import AllQuestions from './Pages/AllQuestions'

const App = () => {
  const { currentUser } = useContext(UsersContext)

  return (
    <>
      <Routes>
        <Route index element={<LoginAndRegister />} />
        <Route path='allQuestions' element={<AllQuestions />} />
      </Routes >
    </>
  )
}

export default App
