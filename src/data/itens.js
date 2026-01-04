// PRODUTOS
import biscoito from '../assets/biscoitinho.png';
import bolinha from '../assets/bolinha-cachorro.jpg';
import brinquedoGato from '../assets/brinquedo-gato.jpg';
import cama from '../assets/caminha-pet.jpg';
import coleira from '../assets/coleira.jpg';
import itemBanho from '../assets/item-banho.png';
import racaoDog from '../assets/racao-dog.jpg';
import racaoGato from '../assets/racao-gato.jpg';
import tijela from '../assets/tijela.png';


// SERVIÇOS
import adestramento from '../assets/adestramento.jpg';
import banho from '../assets/banho.jpg';
import taxi from '../assets/taxi-dog.jpg';
import tosa from '../assets/tosa.jpg';


export const listaItens = [
    // PRODUTOS
    { id: 1, nome: ["Biscoitinho", "biscoito"], categoria: "Produtos", preco: "R$ 80,00", src: biscoito },
    { id: 2, nome: ["bolinha", "bolinha de cachorro", "bola"], categoria: "Produtos", preco: "R$ 50,00", src: bolinha },
    { id: 3, nome: ["Brinquedo de gato", "Brinquedo gato", "Brinquedo"], categoria: "Produtos", preco: "R$ 50,00", src: brinquedoGato },
    { id: 4, nome: ["cama","caminha"], categoria: "Produtos", preco: "R$ 120,00", src: cama },
    { id: 5, nome: ["coleira"], categoria: "Produtos", preco: "R$ 70,00", src: coleira },
    { id: 6, nome: ["produtos para banho","banho"], categoria: "Produtos", preco: "R$ 160,00", src: itemBanho },
    { id: 7, nome: ["ração de cachorro","ração para cachorro", "ração","ração cachorro"], categoria: "Produtos", preco: "R$ 120,00", src: racaoDog },
    { id: 8, nome: ["ração de gato","ração para gato", "ração","ração gato"], categoria: "Produtos", preco: "R$ 120,00", src: racaoGato },
    { id: 9, nome: ["tijela","vasilha de água"], categoria: "Produtos", preco: "R$ 30,00", src: tijela },

    // SERVIÇOS
    { id: 10, nome: ["adestramento","adestrar cachorro"], categoria: "Serviços", preco: "R$ 300,00", src: adestramento },
    { id: 11, nome: ["banho e tosa","banho","tosa"], categoria: "Serviços", preco: "R$ 150,00", src: banho },
    { id: 12, nome: ["táxi dog","taxi dog","transporte pet"], categoria: "Serviços", preco: "R$ 100,00", src: taxi },
    { id: 13, nome: ["tosa","tosar cachorro"], categoria: "Serviços", preco: "R$ 120,00", src: tosa },
];