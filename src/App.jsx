import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HowWeWork from './pages/HowWeWork'
import About from './pages/About'
import Navbar from './components/Navbar.jsx'
import RequestAQuote from './pages/RequestAQuote.jsx'
import ThankYou from './pages/ThankYou.jsx'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/howwework' element={<HowWeWork />} />
            <Route path='/requestaquote' element={<RequestAQuote />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
