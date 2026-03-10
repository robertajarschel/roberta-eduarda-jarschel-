// Seleciona o botão do HTML
const botao = document.getElementById('btnInterativo');

// Lista de dicas sustentáveis
const dicas = [
    "Reduza o consumo de plástico!",
    "Economize água no banho.",
    "Apague as luzes ao sair do quarto.",
    "Prefira produtos de empresas eco-friendly."
];

// Efeito 1: Alerta com dica aleatória ao clicar no botão
botao.addEventListener('click', () => {
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    alert("Dica Sustentável de Roberta: " + dicaAleatoria);
});

// Efeito 2: Mudar cor de destaque ao passar o mouse nos títulos
const titulos = document.querySelectorAll('h2');

titulos.forEach(titulo => {
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = '#74c69d'; // Verde mais claro
    });
    titulo.addEventListener('mouseout', () => {
        titulo.style.color = ''; // Volta ao original
    });
});