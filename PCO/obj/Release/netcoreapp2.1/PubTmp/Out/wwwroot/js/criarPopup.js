
function newPopup(mensagem, id_movimento) {
    var local = document.getElementById("recebePopup");
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.getElementById = "popup";
    popup.id = "popup";

    var div = document.createElement("div");
    div.className = "fechar-popup";

    var img = document.createElement("img");
    img.src = "/images/fechar.png";
    img.className = "img-fechar";
    img.setAttribute("onclick", "destroiPopup()");

    var msg = document.createElement("div");
    msg.className = "mensagem-popup";
    var h5 = document.createElement("h5");
    h5.textContent = mensagem;

    msg.appendChild(h5);
    div.appendChild(img);
    popup.appendChild(div);
    popup.appendChild(msg);


    local.appendChild(popup);

}

function destroiPopup() {
    var popup = document.getElementById("popup");
        if (popup != null) {
            document.getElementById("popup").remove();
        }
    }