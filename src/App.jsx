import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Programs from './components/Programs.jsx'
import Trainers from './components/Trainers.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink-950 selection:bg-brand-400 selection:text-ink-950">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Programs />
          <Trainers />
          <Pricing />
          <Testimonials />
          <Location />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </SmoothScroll>
  )
}
