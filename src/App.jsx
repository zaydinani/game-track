
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.scss'
//components
import Nav from './components/nav'
import Footer from './components/footer'
import Playing from './components/collections'
//pages 
import Hero from './pages/hero'
import SignUp from './pages/auth/signUp'
import SignIn from './pages/auth/signIn'
import Home from './pages/home'
import GamePage from './pages/gamePage'
import NewHome from './pages/newhome'
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
