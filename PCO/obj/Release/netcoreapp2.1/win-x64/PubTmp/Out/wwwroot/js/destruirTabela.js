function limparDados() {
    var body = document.getElementById("conteudo");
    var n = body.childElementCount;

    var head = document.getElementById("cabecalho");
    var v = head.childElementCount;

    for (var i = 0; i < v; i++) {
        if (document.getElementById("coluna") != null) {
            var child = document.getElementById("coluna").remove("coluna");
        }

    }


    for (var i = 0; i < n; i++) {
        body.deleteRow("linha");
    }


}