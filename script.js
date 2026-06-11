// ===== DADOS DOS PROJETOS =====
const projects = [
    {
        id: '1',
        name: 'Polar Simulator',
        author: 'Joyce Santos Carvalho',
        email: 'joyce.scarvalho2@senacsp.edu.br',
        link: 'https://sjoycarvalho.itch.io/polar-simulator',
        status: 'Entregue'
    },
    {
        id: '2',
        name: 'Catota no Esgoto',
        author: 'Rodrigo Carvalho de Barros',
        email: 'rodrigo.cbarros4@senacsp.edu.br',
        link: 'https://metlhedd.itch.io/catota-no-esgoto',
        status: 'Entregue'
    },
    {
        id: '3',
        name: 'Elefantinha do Xixi',
        author: 'Larissa Klai dos Santos',
        email: 'larissa.ksantos4@senacsp.edu.br',
        link: 'https://lariklai.itch.io/elefantinha-do-xixi',
        status: 'Entregue'
    },
    {
        id: '4',
        name: 'Flyspace',
        author: 'Felippe Guirado do Livramento',
        email: 'felippe.glivramento@senacsp.edu.br',
        link: 'https://guirak.itch.io/flyspace',
        status: 'Entregue'
    },
    {
        id: '5',
        name: 'Kurama Air Patrol',
        author: 'Pedro Henrique da Costa Viana',
        email: 'pedro.hcviana@senacsp.edu.br',
        link: 'https://pedrohokage.itch.io/kurama-air-patrol',
        status: 'Não entregue'
    },
    {
        id: '6',
        name: 'Não Vire Comida',
        author: 'Taissa Domingues Massari',
        email: 'taissa.dmassari@senacsp.edu.br',
        link: 'https://leoelho.itch.io/nao-vire-comida',
        status: 'Entregue'
    },
    {
        id: '7',
        name: 'Pombo Place',
        author: 'Jonas da Silva Gasparini',
        email: 'jonas.sgasparini@senacsp.edu.br',
        link: 'https://jonhjota26.itch.io/pombo-place',
        status: 'Entregue'
    },
    {
        id: '8',
        name: 'Gatinho Mágico',
        author: 'Agnes Alves Luz',
        email: 'agnes.aluz@senacsp.edu.br',
        link: 'https://gaguis.itch.io/gatinho-mgico',
        status: 'Entregue'
    },
    {
        id: '9',
        name: 'Flappy Nyan',
        author: 'Luiza Rocha Ferreira',
        email: 'luiza.rferreira@senacsp.edu.br',
        link: 'https://blizzardxd.itch.io/flappy-nyan',
        status: 'Entregue'
    },
    {
        id: '10',
        name: 'Flappy Andreas',
        author: 'Dione Costa da Silva',
        email: 'dione.csilva@senacsp.edu.br',
        link: 'https://estudio-dio.itch.io/flappy-andreas',
        status: 'Entregue'
    },
    {
        id: '11',
        name: 'Corrida de Hermes',
        author: 'Lucas Santana Nascimento',
        email: 'lucas.snascimento53@senacsp.edu.br',
        link: 'https://lulchaos.itch.io/corrida-de-hermes',
        status: 'Entregue'
    },
    {
        id: '12',
        name: 'Sai Cuscuzinho',
        author: 'Helloisa Brito',
        email: 'helloisa.brito@senacsp.edu.br',
        link: 'https://llo-png.itch.io/sai-cuscuzinho',
        status: 'Não entregue'
    }
];

// ===== TEMA (CLARO/ESCURO) =====
function initTheme() {
    const savedTheme = localStorage.getItem('tm76-theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
    localStorage.setItem('tm76-theme', theme);
}

function toggleTheme() {
    const isLightMode = document.body.classList.contains('light-mode');
    setTheme(isLightMode ? 'dark' : 'light');
}

// ===== RENDERIZAR PROJETOS =====
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    grid.innerHTML = projects.map((project, index) => `
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card" style="animation-delay: ${index * 0.1}s">
            <div class="project-image">
                <div>
                    <div class="project-image-letter">${project.name.charAt(0)}</div>
                    <div class="project-image-name">${project.name}</div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-name">${project.name}</h3>
                <p class="project-author">${project.author}</p>
                <div class="project-footer">
                    <span class="project-status ${project.status === 'Entregue' ? 'status-delivered' : 'status-pending'}">
                        ${project.status}
                    </span>
                    <span class="project-platform">Itch.io</span>
                </div>
            </div>
        </a>
    `).join('');
}

// ===== COMENTÁRIOS =====
function loadComments() {
    const saved = localStorage.getItem('tm76-comments');
    return saved ? JSON.parse(saved) : [];
}

function saveComments(comments) {
    localStorage.setItem('tm76-comments', JSON.stringify(comments));
}

function renderComments() {
    const comments = loadComments();
    const container = document.getElementById('commentsContainer');
    const countElement = document.getElementById('commentsCount');
    
    // Atualizar contagem
    const count = comments.length;
    countElement.textContent = `${count} ${count === 1 ? 'Comentário' : 'Comentários'}`;
    
    // Renderizar comentários
    if (comments.length === 0) {
        container.innerHTML = '<p class="no-comments">Nenhum comentário ainda. Seja o primeiro a comentar!</p>';
    } else {
        container.innerHTML = comments.map(comment => `
            <div class="comment-item">
                <div class="comment-header">
                    <h4 class="comment-author">${escapeHtml(comment.author)}</h4>
                    <span class="comment-timestamp">${comment.timestamp}</span>
                </div>
                <p class="comment-text">${escapeHtml(comment.text)}</p>
            </div>
        `).join('');
    }
}

function addComment(author, text) {
    const comments = loadComments();
    
    const newComment = {
        id: Date.now().toString(),
        author: author,
        text: text,
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    comments.push(newComment);
    saveComments(comments);
    renderComments();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tema
    initTheme();
    
    // Renderizar projetos
    renderProjects();
    
    // Renderizar comentários
    renderComments();
    
    // Toggle tema
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Formulário de comentários
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const author = document.getElementById('authorInput').value.trim();
        const text = document.getElementById('textInput').value.trim();
        
        if (!author || !text) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        addComment(author, text);
        
        // Limpar formulário
        document.getElementById('authorInput').value = '';
        document.getElementById('textInput').value = '';
        
        // Scroll para comentários
        document.querySelector('.comments-list').scrollIntoView({ behavior: 'smooth' });
    });
});
