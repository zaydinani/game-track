
import './styles/app.scss'
//components
import Nav from './components/nav'
import Footer from './components/footer'
//pages 
import Hero from './pages/hero'
import SignUp from './pages/auth/signUp'
import SignIn from './pages/auth/signIn'
import Home from './pages/home'
function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  )
}

export default App
