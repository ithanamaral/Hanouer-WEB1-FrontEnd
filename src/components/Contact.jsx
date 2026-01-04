import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false); // Estado para o botão de loading

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Rua Retiro Campestre, 419",
        "Retiro - Contagem, MG",
        "CEP: 32050-400",
      ],
      color: "contact-blue",
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(31) 98359-7825", "(31) 99298-2421", "WhatsApp disponível"],
      color: "contact-green",
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["pastoral.pibare@gmail.com"],
      color: "contact-purple",
    },
    {
      icon: Clock,
      title: "Horários",
      details: ["Dom: 9h e 19h", "Qua: 19h30"],
      color: "contact-orange",
    },
  ];

  // Efeito de "blink" quando o formulário entra na tela
  useEffect(() => {
    const formEl = formRef.current;
    if (!formEl) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formEl.classList.add("blink");
          setTimeout(() => {
            formEl.classList.remove("blink");
          }, 1200);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(formEl);
    return () => observer.disconnect();
  }, []);

  // FUNÇÃO PARA ENVIAR O E-MAIL
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Substitua os campos abaixo pelos IDs do seu painel EmailJS
    const serviceID = "service_ce8wb7y";
    const templateID = "template_llj9xjp";
    const publicKey = "55du7wOqYDgfVpPG3";

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso para a PIBARE!");
          e.target.reset(); // Limpa o formulário após enviar
        },
        (error) => {
          alert("Erro ao enviar mensagem: " + error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Estamos aqui para você! Entre em contato conosco para tirar dúvidas,
            agendar uma visita ou saber mais sobre nossa igreja.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h3 className="contact-info-title">Informações de Contato</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-content">
                    <div className={`contact-icon-wrapper ${info.color}`}>
                      <info.icon className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <h4 className="contact-details-title">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="contact-detail-text">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div
              className="contact-form-wrapper"
              id="form-contato"
              ref={formRef}
            >
              <h3 className="contact-form-title">Envie uma Mensagem</h3>

              {/* ADICIONADO: onSubmit chamando sendEmail */}
              <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name" // Use este nome no template do EmailJS: {{user_name}}
                      className="form-input"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email" // Template: {{user_email}}
                      className="form-input"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="contact_number" // Template: {{contact_number}}
                      className="form-input"
                      placeholder="(31) 99999-9999"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-input"
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="visita">Quero visitar a igreja</option>
                      <option value="ministerio">
                        Interesse em ministérios
                      </option>
                      <option value="oracao">Pedido de oração</option>
                      <option value="evento">Informações sobre eventos</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message" // Template: {{message}}
                    rows={6}
                    className="form-textarea"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="btn btn-primary btn-full btn-large form-submit"
                >
                  <Send className="btn-icon" />
                  {isSending ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h3 className="map-title">Nossa Localização</h3>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7506.160745429982!2d-44.15346547984869!3d-19.83655190600184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6ec0d2c494173%3A0xbcde44c3d3573ca1!2sR.%20Retiro%20Campestre%2C%20419%20-%20Retiro%2C%20Contagem%20-%20MG%2C%2032050-400%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1767219351637!5m2!1spt-BR!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mapa PIBARE"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
