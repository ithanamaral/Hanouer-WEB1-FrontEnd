import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Cultos", href: "#cultos" },
    { name: "Ministérios", href: "#ministerios" },
    { name: "Contato", href: "#contato" },
  ];

  const ministries = [
    { name: "Ministério de Jovens", href: "#ministerios" },
    { name: "Ministério Pastoral", href: "#ministerios" },
    { name: "Ministério de Louvor", href: "#ministerios" },
    { name: "Ministério Social", href: "#ministerios" },
    { name: "Escola Bíblica", href: "#ministerios" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Church Info */}
          <div className="footer-church-info">
            <div className="footer-logo">
              <Heart className="footer-logo-icon" />
              <span className="footer-logo-text">PIBARE</span>
            </div>
            <p className="footer-description">
              A Primeira Igreja Batista no Retiro, foi fundada em 2004, filha da
              primeira igreja Batista do Água Branca, Contagem/MG. É uma comunidade de
              fé, amor e esperança onde todos são bem-vindos. 
            </p>
            <p className="footer-description">Transformando
              vidas através do amor de Cristo há mais de 20 anos.
            </p>

            {/* Contact Info */}
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span className="footer-contact-text">
                  Rua Retiro Campestre, 419, Retiro - Contagem, MG
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span className="footer-contact-text">(31) 98359-7825</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span className="footer-contact-text">
                  pastoral.pibare@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h3 className="footer-section-title">Links Rápidos</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div className="footer-links-section">
            <h3 className="footer-section-title">Ministérios</h3>
            <ul className="footer-links-list">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a href={ministry.href} className="footer-link">
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Social */}
          <div className="footer-schedule-section">
            <h3 className="footer-section-title">Horários dos Cultos</h3>
            <div className="footer-schedule">
              <div className="footer-schedule-item">
                <div className="footer-schedule-day">Domingos</div>
                <div className="footer-schedule-time">9h00 e 19h00</div>
              </div>
              <div className="footer-schedule-item">
                <div className="footer-schedule-day">Quartas-feiras</div>
                <div className="footer-schedule-time">
                  19h30 (Culto de Oração)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © 2026 Primeira Igreja Batista no Retiro. Todos os direitos reservados.
            </div>
            <div className="footer-legal-links">
              <a href="#" className="footer-legal-link">
                Política de Privacidade
              </a>
              <a href="#" className="footer-legal-link">
                Termos de Uso
              </a>
              <a href="#" className="footer-legal-link">
                Transparência
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
