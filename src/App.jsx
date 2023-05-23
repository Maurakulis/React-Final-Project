import './styles/App.css'
import LoginAndRegister from './Pages/LoginAndRegister'
import { Route, Routes } from 'react-router'
import { Navigate } from "react-router-dom"
import { useContext } from 'react'
import UsersContext from './contexts/UsersContext'
import AllQuestions from './Pages/AllQuestions'
import Header from './UI/Header'
import NewQuestion from './Pages/NewQuestion'
import SpecificQuestion from './Pages/SpecificQuestion'
import EditQuestion from './Pages/EditQuestion'
import EditAnswer from './Pages/EditAnswer'

const App = () => {
  const { currentUser } = useContext(UsersContext)

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<LoginAndRegister />} />
        <Route path='questions' element={<AllQuestions />} />

        <Route path='newQuestion' element={currentUser ? <NewQuestion /> : <Navigate to='/' />} />

        <Route path='questions/:id' element={<SpecificQuestion />} />

        <Route path='questions/edit/:id' element={currentUser ? <EditQuestion /> : <Navigate to='/' />} />
        <Route path='answer/edit/:id' element={currentUser ? <EditAnswer /> : <Navigate to='/' />} />
      </Routes >
    </>
  )
}

export default App
