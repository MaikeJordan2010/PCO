
function pesquisarHorizonte(dataInicio, horizonte, tipo, conta, situacao, nivel, responsavel, moeda) {

    let json;

    if (dataInicio === null || horizonte === null || tipo === 0 || conta === 0) {
        dataInicio = document.getElementById("txtDataInicio").value;
        horizonte = document.getElementById("txtHorizonte").value;
        tipo = document.getElementById("txtTipo").value;
        conta = document.getElementById("txtConta").value;
        situacao = document.getElementById("txtSituacao").value;
        moeda = document.getElementById("txtMoeda").value;
    }

    if (nivel == 0) {
        responsavel = document.getElementById("txtResponsavel").value;
    } else {
        responsavel = "0";
    }
    
    let login = document.getElementById("txtLogin").value;
    let form = new FormData();
    
    form.append("dataInicio", dataInicio);
    form.append("horizonte", horizonte);
    form.append("tipo", tipo);
    form.append("conta", conta);
    form.append("situacao", situacao);
    form.append("nivel", nivel);
    form.append("login", login);
    form.append("responsavel", responsavel);
    form.append("moeda", moeda);

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            json = JSON.parse(xmlHttp.responseText);
            inserirObjetos(json, nivel, login);
        }
    };
    xmlHttp.open("POST", "/Home/PesquisarHorizonte", true);
    xmlHttp.send(form);

}

function dispararPesquisa() {

    if (event.keyCode == 13 || event.type == "change") {
        document.getElementById("btnPesquisarHorizonte").click();
    }

}