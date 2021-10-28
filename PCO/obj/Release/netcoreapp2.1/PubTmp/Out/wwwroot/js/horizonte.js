
function pesquisarHorizonte(dataInicio, horizonte, tipo, conta, situacao, nivel, responsavel) {

    let json;

    if (dataInicio === null || horizonte === null || tipo === 0 || conta === 0) {
        dataInicio = document.getElementById("txtDataInicio").value;
        horizonte = document.getElementById("txtHorizonte").value;
        tipo = document.getElementById("txtTipo").value;
        conta = document.getElementById("txtConta").value;
        situacao = document.getElementById("txtSituacao").value;
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

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            json = JSON.parse(xmlHttp.responseText);
            inserirObjetos(json, nivel, responsavel);
        }
    };
    xmlHttp.open("POST", "/Home/PesquisarHorizonte", true);
    xmlHttp.send(form);

}

function dispararPesquisa() {

    if (event.keyCode == 13) {
        document.getElementById("btnPesquisarHorizonte").click();
    }

}