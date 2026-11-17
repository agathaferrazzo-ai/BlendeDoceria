
function responder(pergunta) {
    const texto = pergunta
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (
        texto.includes("oi") ||
        texto.includes("ola") ||
        texto.includes("bom dia") ||
        texto.includes("boa tarde") ||
        texto.includes("boa noite")
    ) {
        return "Olá! Seja muito bem-vindo à Blendê Doceria! 💗 Como posso ajudar?";
    }

    if (
        texto.includes("empresa") ||
        texto.includes("quem somos") ||
        texto.includes("historia")
    ) {
        return "A Blendê Doceria é uma confeitaria artesanal que produz bolos, doces e sobremesas com ingredientes selecionados, criatividade e muito carinho!";
    }

    if (
        texto.includes("produto") ||
        texto.includes("cardapio") ||
        texto.includes("vende") ||
        texto.includes("doces") ||
        texto.includes("bolo") ||
        texto.includes("sobremesa")
    ) {
        return "Trabalhamos com bolos, doces e sobremesas artesanais! Nossa proposta é unir receitas tradicionais, sabores criativos e apresentações especiais. 🍰";
    }

    if (texto.includes("missao")) {
        return "Nossa missão é produzir doces artesanais de alta qualidade, unindo criatividade, inovação e carinho para proporcionar experiências saborosas e momentos inesquecíveis!";
    }

    if (texto.includes("valores")) {
        return "Nossos valores são qualidade, criatividade, carinho, inovação, compromisso, sustentabilidade e satisfação dos clientes. 💗";
    }

    if (texto.includes("publico") || texto.includes("idade")) {
        return "Nosso público-alvo são pessoas de todas as idades que gostam de doces, bolos e sobremesas!";
    }

    if (texto.includes("slogan")) {
        return "Nosso slogan é: 'Seu desejo, nossa inspiração!' 💕";
    }

    if (texto.includes("qualidade")) {
        return "A qualidade é muito importante para nós! Utilizamos ingredientes selecionados e preparamos nossos produtos com atenção aos detalhes.";
    }

    if (texto.includes("criatividade") || texto.includes("inovacao")) {
        return "A criatividade e a inovação fazem parte da nossa essência! Buscamos criar sabores e apresentações que surpreendam nossos clientes.";
    }

    if (texto.includes("sustentabilidade") || texto.includes("meio ambiente")) {
        return "Valorizamos a sustentabilidade e buscamos reduzir desperdícios e adotar práticas que contribuam com o meio ambiente.";
    }

    if (texto.includes("preco") || texto.includes("valor") || texto.includes("custa")) {
        return "Nossos preços ainda não estão disponíveis nesta demonstração. Para consultar valores, entre em contato com a equipe da Blendê Doceria.";
    }

    if (texto.includes("pedido") || texto.includes("encomenda")) {
        return "Para fazer encomendas, recomendamos entrar em contato diretamente com a equipe da Blendê Doceria para verificar disponibilidade e condições.";
    }

    if (texto.includes("obrigado") || texto.includes("obrigada")) {
        return "Por nada! 💗 Ficamos felizes em ajudar. Volte sempre à Blendê Doceria!";
    }

    if (
        texto.includes("tchau") ||
        texto.includes("ate logo") ||
        texto.includes("adeus")
    ) {
        return "Até logo! Obrigado pela visita. Esperamos você novamente na Blendê Doceria! 🍰";
    }

    return "Desculpe, ainda não tenho essa informação. Você pode perguntar sobre nossa empresa, produtos, missão ou valores. 💗";
}

function adicionarMensagem(texto, tipo) {
    const mensagens = document.getElementById("mensagens");

    const novaMensagem = document.createElement("div");
    novaMensagem.classList.add("mensagem", tipo);
    novaMensagem.textContent = texto;

    mensagens.appendChild(novaMensagem);
    mensagens.scrollTop = mensagens.scrollHeight;
}

function enviarMensagem() {
    const campo = document.getElementById("mensagem");
    const pergunta = campo.value.trim();

    if (pergunta === "") {
        return;
    }

    adicionarMensagem(pergunta, "usuario");

    const resposta = responder(pergunta);

    adicionarMensagem(resposta, "bot");

    campo.value = "";
    campo.focus();
}

function enviarSugestao(pergunta) {
    adicionarMensagem(pergunta, "usuario");

    const resposta = responder(pergunta);

    adicionarMensagem(resposta, "bot");
}

document.addEventListener("DOMContentLoaded", function() {
    const campo = document.getElementById("mensagem");

    campo.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            enviarMensagem();
        }
    });
});
