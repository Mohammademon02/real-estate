import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import Footer from './components/Footer/Footer.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import OurTeam from './components/OurTeam/OurTeam.jsx'
import Faq from './components/Faq/Faq.jsx'
import CallToAction from './components/CallToAction/CallToAction.jsx'
import ImageWithText from './components/ImageWithText/ImageWithText.jsx'
import Properties from './components/Properties/Properties.jsx'
import Features from './components/Features/Features.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
    <Features />
    <Properties />
    <ImageWithText />
    <CallToAction />
    <Faq />
    <OurTeam />
    <ContactUs />
    <Footer />
  </StrictMode>
)
