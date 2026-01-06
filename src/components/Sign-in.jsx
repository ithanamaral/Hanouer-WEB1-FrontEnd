import React, { useState, useRef } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import './Sign-in.css';

function SignIn() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Captura dos dados
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Tentativa de Login:", data);

    // Simulação de autenticação
    setTimeout(() => {
      alert("Bem-vindo de volta ao Hanouer Petshop!");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="signin" className="signin-section">
      <div className="signin-container">
        <div className="signin-form-wrapper">
          <h3 className="signin-form-title">Acessar Conta</h3>
          <p className="signin-subtitle">Que bom ver você novamente!</p>

          <form className="signin-form" ref={formRef} onSubmit={handleSignIn}>
            
            {/* Campo Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="form-input"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Senha</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input
                  type="password"
                  id="password"
                  name="user_password"
                  className="form-input"
                  placeholder="Sua senha secreta"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-signin"
            >
              <LogIn size={18} />
              {isSubmitting ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div className="signin-footer">
            <p>Novo por aqui? <a href="/signup">Crie uma conta</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;