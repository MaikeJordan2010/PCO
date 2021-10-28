
function atualizar(nome, id, valor, controle) {
    // document.getElementsByName(nome).style.backgroundColor = '#ffffff';

    

    if (event.keyCode == 13 || event.keyCode == 09 || controle == 1) {

        alert(valor);

        let partes = nome.split("-");
        let situacao = -2;

        if (partes[0] == "valorSolicitado") {
            situacao = -2;
        } else if (partes[0] == "valorOrcado") {
            situacao = -1;
        }

        //valor = valor.replace(".", "");
        //valor = valor.replace(",", ".");
        //valor = parseFloat(valor);

        let form = new FormData();
        form.append("valorRecebido", valor);
        form.append("Id_movimento", id);
        form.append("nomeCampo", nome);
        form.append("situacao", situacao);

        

        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                pesquisar();
            }
        };
        xmlHttp.open("POST", "/Home/AlterarCampos", true);
        xmlHttp.send(form);
        

    } 

}



