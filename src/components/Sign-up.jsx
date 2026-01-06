import React, { useState, useRef } from 'react';
import { Send, User, Mail, Lock, CreditCard } from 'lucide-react';
import './Sign-up.css';

function SignUp() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulação de lógica de cadastro
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Dados para cadastro:", data);

    // Simular um atraso de rede
    setTimeout(() => {
      alert("Cadastro realizado com sucesso!");
      setIsSending(false);
      formRef.current.reset();
    }, 1500);
  };

  return (
    <section id="signup" className="signup-section">
      <div className="signup-container">
        <div className="signup-form-wrapper">
          <h3 className="signup-form-title">Crie sua Conta</h3>
          <p className="signup-subtitle">Entre para a família Hanouer Petshop</p>

          <form className="signup-form" ref={formRef} onSubmit={handleSignUp}>
            
            {/* Campo Nome */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nome Completo</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="form-input"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
            </div>

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

            <div className="form-row">
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
                    placeholder="******"
                    required
                  />
                </div>
              </div>

              {/* Campo CPF */}
              <div className="form-group">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <div className="input-with-icon">
                  <CreditCard size={18} className="input-icon" />
                  <input
                    type="text"
                    id="cpf"
                    name="user_cpf"
                    className="form-input"
                    placeholder="000.000.000-00"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="btn-signup"
            >
              <Send size={18} />
              {isSending ? "Cadastrando..." : "Criar Minha Conta"}
            </button>
          </form>
          
          <p className="login-link">
            Já tem uma conta? <a href="/signin">Faça Sign In</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;