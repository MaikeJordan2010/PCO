

function destroiPopup() {
   

    document.getElementById("mostraMsg").checked = false;

    var popup = document.getElementById("popup");
    popup.style.display = "none";
    ReverteDestacadorDeConversa();
    
}


function criarMensagens(json) {

    var pop = document.getElementById("popup");
    pop.style.display = "block";



    var userLogin = document.getElementById("txtNameUser").value;

    destrioMensagens();
    
    for (var i = 0; i < json.length; i++) {

        if (json[i].login_Autor === userLogin) {
            novaMensagemEnviada(json[i].msg, json[i].data, json[i].login_Autor);
        } else {
            novaMensagemRecebida(json[i].msg, json[i].data, json[i].login_Autor);
        }
        focarNaUltimaMsg(i * 100);
    }
   
}


function focarNaUltimaMsg(valor){
    let conteiner = document.getElementById("conteiner-msgs");
    conteiner.scrollTo(0, valor);
}


function buscarMensagem(Data, ID_Tipo, ID_Conta, UserLogin, ValorGravado, Descricao) {

    var txtID_Conta = document.getElementById("txtID_Conta_Msg");
    txtID_Conta.value = ID_Conta;

    var txtID_Tipo = document.getElementById("txtID_Tipo_Msg");
    txtID_Tipo.value = ID_Tipo;

    var txtDataMes = document.getElementById("txtDataMes_Msg");
    txtDataMes.value = Data;

    var txtValor = document.getElementById("txtValor_Msg");
    txtValor.value = ValorGravado;

    var txtDescricao = document.getElementById("txtDescricaoConta");
    txtDescricao.value = Descricao;

    var txtMsg = document.getElementById("txtMsg").value;

    var form = new FormData();

    let dt = new Date();
    let anoCol = txtDataMes.value.substr(0, 4);
    let mesCol = txtDataMes.value.substr(4, 2);

    dt =  "01/" + mesCol + "/" + anoCol;

    form.append("DataGravacao", dt);
    form.append("ID_Tipo", ID_Tipo);
    form.append("ID_Conta", ID_Conta);
       
    var xmlHttp= new XMLHttpRequest();

    xmlHttp.onreadystatechange= function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var json = JSON.parse(xmlHttp.responseText);
            criarMensagens(json);
            informacoesMovimento(Data, ID_Tipo, ID_Conta, ValorGravado, Descricao);
        }
    }

    xmlHttp.open("POST", "/Home/ConsultarMensagem", true);
    xmlHttp.send(form);
    
}


function destrioMensagens() {

    let Enviada = document.getElementById("conteiner-msgs");
    let nE = Enviada.childElementCount;

    for (var i = 0; i < nE; i++) {
        if (document.getElementById("divMensagem") != null ) {
            let child = document.getElementById("divMensagem").remove("divMensagem");
            let quebraLinha = document.getElementById("quebraLinha").remove("quebraLinha");
        }
    }
    
}


function verificador(d, ID_Tipo, ID_Conta, UserLogin, descricao, valor) {

    if (d === undefined || ID_Tipo == undefined || ID_Conta == undefined || descricao == undefined) {
       ID_Conta = document.getElementById("txtID_Conta_Msg").value;
       ID_Tipo = document.getElementById("txtID_Tipo_Msg").value;
       d = document.getElementById("txtDataMes_Msg").value;
        UserLogin = document.getElementById("txtNameUser").value;
        valor = document.getElementById("txtValor_Msg").value;
        descricao = document.getElementById("txtDescricaoConta").value;
    }
    ReverteDestacadorDeConversa();
    DestacadorDeConversa(d, ID_Tipo, ID_Conta);
    buscarMensagem(d, ID_Tipo, ID_Conta, UserLogin, valor, descricao);

}

function DestacadorDeConversa(d, ID_Tipo, ID_Conta) {

    let nomeElemento = d + "-" + ID_Tipo + "-" + ID_Conta;
    let td = document.getElementById(nomeElemento);

    td.style.border = "4px solid #f95e5e";

}

function ReverteDestacadorDeConversa() {

    let txtID_Conta = document.getElementById("txtID_Conta_Msg").value;
    let txtID_Tipo = document.getElementById("txtID_Tipo_Msg").value;
    let txtDataMes = document.getElementById("txtDataMes_Msg").value;

    let idElemento = txtDataMes + "-" + txtID_Tipo + "-" + txtID_Conta;

    let td = document.getElementById(idElemento);

    if (td != null) {
        td.style.border = "1px solid #939292";
    }
}

function enviarMensagemVerificar() {
    if (event.keyCode == 13) {
        EnviarMensagem();
        let txtID_Conta = document.getElementById("txtID_Conta_Msg").value;
        let txtID_Tipo = document.getElementById("txtID_Tipo_Msg").value;
        let txtDataMes = document.getElementById("txtDataMes_Msg").value;
        let txtNameUser = document.getElementById("txtNameUser").value;
        let txtValor = document.getElementById("txtValor_Msg").value;
        let txtDescricao = Document.getElementById("txtDescricaoConta").value;
        buscarMensagem(txtDataMes, txtID_Tipo, txtID_Conta, txtNameUser, txtValor, txtDescricao);
        
    }
}

