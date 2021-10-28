function alterarSituacao(situacao, id_movimento) {

    let form = new FormData();
    form.append("situacao", situacao);
    form.append("id_movimento", id_movimento);

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            
        }
    };

    xmlHttp.open("POST", "/Home/AlterarSituacao", true);
    xmlHttp.send(form);
    pesquisar();
}