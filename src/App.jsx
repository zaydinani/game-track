
import './styles/app.scss'
//components
import Nav from './components/nav'
import Footer from './components/footer'
//pages 
import Hero from './pages/hero'
import SignUp from './pages/auth/signUp'
import SignIn from './pages/auth/signIn'
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Footer />
    </>
  )
}

export default App
