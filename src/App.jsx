import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Features from './Components/Features.jsx'
import Footer from './Components/Footer.jsx'
const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App