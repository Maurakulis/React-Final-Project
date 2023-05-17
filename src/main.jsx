import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UsersProvider } from './contexts/UsersContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UsersProvider>,
)
