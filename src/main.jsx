import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'flowbite';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx';
import Proyek from './sections/Proyek.jsx';
import Contact from './sections/Contact.jsx';
import About from './sections/About.jsx';
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <Proyek />
    <Contact />
    <Footer />
  </StrictMode>,
)
