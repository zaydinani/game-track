
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.scss'
//components
import Nav from './components/nav'
import Footer from './components/footer'
import Collection from './components/collections'
//pages 
import Hero from './pages/hero'
import SignUp from './pages/auth/signUp'
import SignIn from './pages/auth/signIn'
import GamePage from './pages/gamePage'
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/playing" element={<Collection />} />
        <Route path="/want" element={<Collection />} />
        <Route path="/owned" element={<Collection />} />
        <Route path="/finished" element={<Collection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
