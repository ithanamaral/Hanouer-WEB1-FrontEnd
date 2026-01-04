import { Heart, Users, BookOpen, HandHeart } from "lucide-react";
import welcomingInterior from "../assets/Foto26.jpeg";
import "./About.css";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor",
      description:
        "Demonstramos o amor de Cristo através de nossas ações e relacionamentos.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Construímos uma família unida onde todos se sentem acolhidos e valorizados.",
    },
    {
      icon: BookOpen,
      title: "Palavra",
      description:
        "Fundamentamos nossa fé na Palavra de Deus e em seus ensinamentos.",
    },
    {
      icon: HandHeart,
      title: "Serviço",
      description:
        "Servimos nossa comunidade e aqueles que mais precisam de ajuda.",
    },
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Text Content */}
          <div className="about-text">
            <h2 className="about-title">Nossa Missão</h2>

            <div className="about-paragraphs">
              <p className="about-paragraph">
                A{" "}
                <span className="bold">Primeira Igreja Batista no Retiro</span>,
                foi fundada em 2004, filha da primeira igreja Batista do Água
                Branca, Contagem/MG. Temos como <span className="bold">Igreja de Cristo</span> o propósito de ser
                uma agência do Reino de Deus para servir ao Senhor e
                <span className="bold"> levar Sua Palavra com amor e fé</span>,
                buscando ser um ambiente que propicie o{" "}
                <span className="bold">
                  crescimento espiritual e mental dos seus membros
                </span>
                .
              </p>

              <p className="about-paragraph">
                Você é <span className="bold">bem-vindo(a)</span> para estar
                conosco e, através do Estudo da Palavra, louvores, orações e
                comunhão, crescer e viver as
                <span className="bold"> bençãos de Deus!</span>
              </p>

              <p className="about-paragraph">
                Acreditamos que cada pessoa é única e valiosa aos olhos de Deus.
                Nossa missão é criar um ambiente onde todos possam experimentar
                o amor incondicional de Cristo, crescer em sua jornada de fé e
                descobrir seus dons para servir ao próximo.
              </p>
            </div>

            {/* Values Grid */}
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon-wrapper">
                    <value.icon className="value-icon" />
                  </div>
                  <div className="value-content">
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img
                src={welcomingInterior}
                alt="Interior acolhedor da igreja"
                className="about-image"
              />
              <div className="about-image-overlay"></div>
            </div>

            {/* Floating Stats */}
            <div className="stat-card stat-card-left">
              <div className="stat-content">
                <div className="stat-number">20+</div>
                <div className="stat-label">Anos de Ministério</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
