document.addEventListener('DOMContentLoaded', function() {
    const frases = [
        "Um passo por dia já é progresso.",
        "Você está indo melhor do que imagina.",
        "Continue. Seu futuro agradece.",
        "Não desista. Grandes coisas levam tempo.",
        "Respira. Você é capaz.",
        "Seu esforço de hoje constrói seu amanhã.",
        "Confie no processo.",
        "Você não chegou até aqui por acaso."
    ];

    document.getElementById('form-frase').addEventListener('submit', function(evento) {
        evento.preventDefault();

        const indice = Math.floor(Math.random() * frases.length);
        const fraseSorteada = frases[indice];

        document.getElementById('frase-texto').innerText = fraseSorteada;
        document.querySelector('.resultado').style.display = 'block';
    });
});
