import { Heart, CreditCard, Smartphone, Building, ArrowRight } from 'lucide-react'
import './Donation.css'
import { Link } from 'react-router-dom';

const Donation = () => {
  const donationMethods = [
    {
      icon: Smartphone,
      title: "PIX",
      description: "Transferência instantânea via PIX",
      color: "donation-green"
    },
  ]

  return (
    <section className="donation-section">
      <div className="donation-container">
        {/* Header */}
        <div className="donation-header">
          <div className="donation-heart-icon">
            <Heart className="heart-icon" />
          </div>
          <h2 className="donation-title">
            Faça Parte da Obra
          </h2>
          <p className="donation-subtitle">
           Ao contribuir, você se torna parte da transformação de vidas e da expansão do Reino de Deus conosco.
          </p>
        </div>

        <div className="donation-grid">
          {/* Donation Methods */}
          <div className="donation-methods">
            <h3 className="methods-title">
              Como Contribuir
            </h3>
            
            <div className="methods-list">
              {donationMethods.map((method, index) => (
                <div key={index} className="method-card">
                  <div className="method-content">
                    <div className={`method-icon-wrapper ${method.color}`}>
                      <method.icon className="method-icon" />
                    </div>
                    <div className="method-info">
                      <h4 className="method-title">
                        {method.title}
                      </h4>
                      <p className="method-description">{method.description}</p>
                    </div>
                    <ArrowRight className="method-arrow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="bible-verse">
          <div className="bible-verse-content">
            <div className="bible-quote-mark">"</div>
            <blockquote className="bible-quote">
              "Cada um contribua segundo propôs no seu coração, não com tristeza 
              ou por necessidade; porque Deus ama ao que dá com alegria."
            </blockquote>
            <cite className="bible-reference">2 Coríntios 9:7</cite>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donation

