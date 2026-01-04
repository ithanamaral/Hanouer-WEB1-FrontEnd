import React, { useState } from 'react'; // Import unificado
import { useSearchParams, Link } from 'react-router-dom';
import './Busca.css';
import { Plus, Minus } from 'lucide-react';
import { listaItens } from '../data/itens';

const Busca = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || "";

  // 1. Estado para controlar as quantidades de cada card individualmente
  // Começa como um objeto vazio {}
  const [quantidades, setQuantidades] = useState({});


  // 2. Função para alterar a quantidade baseada no ID do produto
  const alterarQuantidade = (id, operacao) => {
    setQuantidades(prev => {
      const qtdAtual = prev[id] || 1; // Se não existir valor salvo, assume 1
      if (operacao === 'aumentar') {
        return { ...prev, [id]: qtdAtual + 1 };
      }
      if (operacao === 'diminuir' && qtdAtual > 1) {
        return { ...prev, [id]: qtdAtual - 1 };
      }
      return prev;
    });
  };

  const resultados = listaItens.filter(item => {
    const nomeCoincide = Array.isArray(item.nome)
      ? item.nome.some(n => n.toLowerCase().includes(query))
      : item.nome.toLowerCase().includes(query);
    const categoriaCoincide = item.categoria.toLowerCase().includes(query);
    return nomeCoincide || categoriaCoincide;
  });

  return (
    <main className="busca-page">
      <h1>Resultados para: "{query}"</h1>

      {resultados.length > 0 ? (
        <div className="resultados-grid">
          {resultados.map(item => {
            // Pegamos a quantidade específica deste item no estado
            const qtdDesteItem = quantidades[item.id] || 1;

            return (
              <div key={item.id} className="card-resultado">
                <div className="card-image-container">
                  <img src={item.src} alt={item.nome[0]} className="card-img" />
                </div>
                <h3>{item.nome[0]}</h3>
                <p>{item.categoria}</p>
                <span>{item.preco}</span>

                {/* CONTADOR INTEGRADO DIRETAMENTE AQUI */}
                <div className="quantidade-control">
                  <button 
                    onClick={() => alterarQuantidade(item.id, 'diminuir')}
                    className="btn-qtd"
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span className="qtd-numero">{qtdDesteItem}</span>
                  
                  <button 
                    onClick={() => alterarQuantidade(item.id, 'aumentar')}
                    className="btn-qtd"
                  >
                    <Plus size={16} />
                  </button>
                </div>                
                <button className="btn-ver">
                  Adicionar ao Carrinho
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="sem-resultados">
          <p>Não encontramos nada relacionado a "{query}".</p>
          <Link to="/">Voltar para a Home</Link>
        </div>
      )}
    </main>
  );
};

export default Busca;