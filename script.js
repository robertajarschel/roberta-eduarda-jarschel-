// script.js - Efeitos interativos do site

// ===== FUNÇÃO 1: ALERTA NOS CARDS (MALEFÍCIOS) =====
// Quando clicar nos cards da seção "Malefícios"
function mostrarAlerta(tipo) {
    let mensagem = "";
    
    // Escolhe a mensagem baseada no tipo
    switch(tipo) {
        case 'poluicao':
            mensagem = "🌫️ A poluição causa: aquecimento global, doenças respiratórias e contaminação dos oceanos!";
            break;
        case 'desmatamento':
            mensagem = "🌲 O desmatamento ameaça: 1 milhão de espécies com extinção e acelera as mudanças climáticas!";
            break;
        case 'consumo':
            mensagem = "📦 Consumimos 1.7 planetas por ano! Precisamos reduzir, reutilizar e reciclar.";
            break;
        default:
            mensagem = "Clique nos cards para saber mais!";
    }
    
    // Mostra um alerta estilizado (bonitinho)
    alert("🔔 INFO: " + mensagem);
}

// ===== FUNÇÃO 2: DICA VERDE COM BOTÃO =====
// Quando a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega o botão e a mensagem pelo ID
    const botao = document.getElementById('botaoDica');
    const mensagem = document.getElementById('mensagemDica');
    
    // Lista de dicas sustentáveis
    const dicas = [
        "🌱 Troque sacolas plásticas por ecobags!",
        "💡 Apague as luzes ao sair de um cômodo!",
        "🚲 Use mais bicicleta ou transporte público!",
        "♻️ Separe o lixo para reciclagem!",
        "🚿 Tome banhos mais curtos (economiza água)!",
        "🥕 Compre de agricultores locais!",
        "📚 Doe livros e roupas que não usa mais!"
    ];
    
    // Quando clicar no botão
    botao.addEventListener('click', function() {
        // Escolhe uma dica aleatória
        const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
        
        // Coloca a dica no parágrafo
        mensagem.textContent = "✨ DICA DO DIA: " + dicaAleatoria;
        
        // Adiciona a classe 'mostrar' pra ela aparecer
        mensagem.classList.add('mostrar');
        
        // Faz o botão dar um feedback (muda cor rapidinho)
        botao.style.backgroundColor = "#97cba9";
        setTimeout(function() {
            botao.style.backgroundColor = "#2c5f2d";
        }, 200);
    });
    
    // ===== FUNÇÃO 3: MENU ATIVO =====
    // Destaca no menu a seção que está visível na tela
    
    // Pega todas as seções e links do menu
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.menu a');
    
    // Função que verifica qual seção está visível
    function mudarMenuAtivo() {
        let current = '';
        
        // Verifica a posição de cada seção
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Se a seção estiver visível na tela
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        // Remove a classe 'active' de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Adiciona 'active' no link correspondente à seção visível
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    // Executa a função quando a página rolar
    window.addEventListener('scroll', mudarMenuAtivo);
    
    // ===== FUNÇÃO 4: EFEITO DE APARECER SUAVE =====
    // Faz as seções aparecerem com fade quando rola a página
    
    // Configuração do observador de interseção
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 }); // Ativa quando 10% da seção está visível
    
    // Aplica o efeito para todas as seções
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(section);
    });
    
    // ===== FUNÇÃO 5: CLIQUE SUAVE NO MENU =====
    // Quando clicar no menu, rola suavemente até a seção
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            
            // Pega o ID da seção
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Calcula a posição (considerando o menu fixo)
            const menuHeight = document.querySelector('.menu').offsetHeight;
            const targetPosition = targetSection.offsetTop - menuHeight;
            
            // Rola suavemente
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});