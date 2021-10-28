
document.querySelector('body').addEventListener('onkeypress', function (event) {

    var tecla = event.keyCode;
    
    if (tecla == 27) {

        var txtValor = document.querySelector("#guardaValorSolicitado");
        
        var valor = txtValor.value;
        var partes = txtValor.className.split("_");
        var nome = partes[0];
        var id = partes[1];
        atualizar(nome, id, valor);

    }
});


function pegarNome(nome, id, valor) {

    var txtValor = document.querySelector("#guardaValorSolicitado");
    txtValor.value = valor;
    txtValor.className = nome+"_"+id;
}

