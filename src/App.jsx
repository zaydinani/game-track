
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
    <>
      <Nav />
      <NewHome />
      <Footer />
    </>
  )
}

export default App
