import './styles/app.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Main />
      <Footer />
    </div>
  )
}

export default App
