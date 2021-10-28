function mudarSituacao(situacao, id_movimento) {

    var form = new FormData();
    form.append("situacao", situacao);
    form.append("id_movimento", id_movimento);

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {

    };

    xmlHttp.open("POST", "@Url.Action("AlterarSituacao","Home")", true);
    xmlHttp.send(form);
    pesquisarHorizonte(null, null, 0, 0, 0);
}