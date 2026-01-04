import { ArrowRight, Play } from 'lucide-react'
import churchExterior from '../assets/Foto1.jpeg'
import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      {/* Background Image */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${churchExterior})`,
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in-up">
          Bem-vindos à
          <span className="hero-title-highlight">Primeira Igreja Batista no Retiro</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-in-up animation-delay-300">
          Uma comunidade de fé, amor e esperança onde todos são bem-vindos
        </p>
      </div>
    </section>
  )
}

export default Hero

