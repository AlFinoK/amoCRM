import App from './App.jsx'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="https://github.com/AlFinoK/amoCRM">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
