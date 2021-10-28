function informacoesMovimento(d, ID_Tipo, ID_Conta, Valor, Descricao) {

    destruirInfo();

    if (Valor == NaN || Valor == undefined) {
        Valor = 0.0;
    }

    let nomeMes = resolverNomeMes(d);

    let divInfo = document.getElementById("popup-info");
    let h61 = document.createElement("h6");
    h61.className = "labelInformacoesMovimento";
    h61.textContent = "Tipo: " + ID_Tipo + "  -  Conta: " + ID_Conta;
    h61.id = "labelInformacoesTipoConta";


    let h63 = document.createElement("h6");
    h63.className = "labelInformacoesMovimento";
    h63.textContent = " Descricao: " + Descricao;
    h63.id = "labelInformacoesDescricao";
    


    let h62 = document.createElement("h6");
    h62.className = "labelInformacoesMovimento";
    h62.textContent = "Data: " + nomeMes + " - Valor: " + parseFloat(Valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    h62.id = "labelInformacoesData";

   
    divInfo.appendChild(h61);
    divInfo.appendChild(h63);
    divInfo.appendChild(h62);

    let txtMsg = document.getElementById("txtMsg");
    txtMsg.value = "";


}

function destruirInfo() {
    let infQtd = document.getElementById("popup-info");
    let nI = infQtd.childElementCount;

    for (var j = 0; j < nI; j++) {
        if (document.getElementById("labelInformacoesTipoConta") != null) {
            let infoConta = document.getElementById("labelInformacoesTipoConta").remove("labelInformacoesTipoConta");
            let infoDescricao = document.getElementById("labelInformacoesDescricao").remove("labelInformacoesDescricao");
            let infoData = document.getElementById("labelInformacoesData").remove("labelInformacoesData");
        }
    }
}
