import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UsersProvider } from './contexts/UsersContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QuestionProvider } from './contexts/QuestionsContext.jsx'
import { AnswersProvider } from './contexts/AnswersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnswersProvider>
    <QuestionProvider>
      <UsersProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersProvider>
    </QuestionProvider>
  </AnswersProvider>
  ,
)
