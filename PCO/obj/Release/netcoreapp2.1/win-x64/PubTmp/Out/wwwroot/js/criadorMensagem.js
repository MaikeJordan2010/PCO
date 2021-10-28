function novaMensagemRecebida(mensagem, dataEnvio, usuario) {

    let container = document.getElementById("conteiner-msgs");

    let divRecebida = document.createElement("div");
    divRecebida.id = "divMensagem";

    let pInfo = document.createElement("p");
    pInfo.className = "informacoesSobreEnvio";
    pInfo.textContent = usuario + " - " + dataEnvio;

    let spanRecebida = document.createElement("span");
    spanRecebida.className = "MsgRecebida";

    let pRecebido = document.createElement("p");
    pRecebido.className = "pMsgRecebida";
    pRecebido.textContent = mensagem;

    let br = document.createElement("br");
    br.id = "quebraLinha";

    spanRecebida.appendChild(pInfo);
    spanRecebida.appendChild(pRecebido);
    divRecebida.appendChild(spanRecebida);
    container.appendChild(divRecebida);
    container.appendChild(br);

}

function novaMensagemEnviada(mensagem, dataEnvio, usuario) {

    let container = document.getElementById("conteiner-msgs");
    let spanEnviado = document.createElement("div");
    spanEnviado.className = "MsgEnviada";

    let divEnviado = document.createElement("div");
    divEnviado.id = "divMensagem";

    let pInfo = document.createElement("p");
    pInfo.className = "informacoesSobreEnvio";
    pInfo.textContent = usuario + " - " + dataEnvio;

    let pEnviado = document.createElement("p");
    pEnviado.className = "pMsgEnviada";
    pEnviado.textContent = mensagem;

    let br = document.createElement("br");
    br.id = "quebraLinha";

    spanEnviado.appendChild(pInfo);
    spanEnviado.appendChild(pEnviado);
    divEnviado.appendChild(spanEnviado);
    container.appendChild(divEnviado);
    container.appendChild(br);

}