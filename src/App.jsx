
import './styles/app.scss'
//components
import Nav from './components/nav'
import Footer from './components/footer'
//pages 
import Hero from './pages/hero'
import SignUp from './pages/auth/signUp'
import SignIn from './pages/auth/signIn'
import Home from './pages/home'
import GamePage from './pages/gamePage'
function App() {
  return (
    <>
      <Nav />
      <GamePage />
      <Footer />
    </>
  )
}

export default App
