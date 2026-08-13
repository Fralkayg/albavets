import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import FlyerShare from './components/FlyerShare'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

function App() {
  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Gallery />
        <Contact />
        <FlyerShare />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default App
