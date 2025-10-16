let motivos = [];

// Carrega os motivos do arquivo txt
async function carregarMotivos() {
    try {
        const resposta = await fetch('motivos.txt');
        const texto = await resposta.text();
        motivos = texto.split('\n').filter(l => l.trim() !== '');
    } catch (err) {
        console.error("Erro ao carregar motivos:", err);
        document.getElementById('motivo').innerText = "Erro ao carregar motivos 😢";
    }
}

// Mostra o motivo do dia
function mostrarMotivo() {
    const motivoDiv = document.getElementById('motivo');

    // Recupera a data do primeiro dia do localStorage ou define como hoje
    let primeiroDia = localStorage.getItem('primeiroDia');
    if (!primeiroDia) {
        const hoje = new Date();
        hoje.setHours(0,0,0,0);
        primeiroDia = hoje.toISOString();
        localStorage.setItem('primeiroDia', primeiroDia);
    }

    const primeiro = new Date(primeiroDia);
    const hoje = new Date();
    hoje.setHours(0,0,0,0);

    // Calcula a diferença de dias
    const diff = Math.floor((hoje - primeiro) / (1000*60*60*24));
    const diaAtual = diff % motivos.length;

    // Animação suave
    motivoDiv.classList.remove('fade');
    void motivoDiv.offsetWidth;
    motivoDiv.classList.add('fade');

    motivoDiv.innerHTML = motivos[diaAtual] 
        ? `💖 ${motivos[diaAtual]} 💖` 
        : "Ainda não há um motivo para hoje, mas eu continuo te amando! 💕";
}

// Corações flutuando
function gerarCoracoes() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

setInterval(gerarCoracoes, 500);

// Evento do botão
document.getElementById('mostrar').addEventListener('click', mostrarMotivo);

// Executa ao iniciar
carregarMotivos();
