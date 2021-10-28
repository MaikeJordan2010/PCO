function EnviarMensagem() {

    let txtID_Tipo = document.getElementById("txtID_Tipo_Msg").value;
    let txtID_Conta = document.getElementById("txtID_Conta_Msg").value;
    let txtDataMes = document.getElementById("txtDataMes_Msg").value;
    let txtMsg = document.getElementById("txtMsg").value;
    let txtNameUser = document.getElementById("txtNameUser").value;
    let txtValor = document.getElementById("txtValor_Msg").value;

    let dt = new Date();
    let ano = txtDataMes.substr(0, 4);
    let mes = txtDataMes.substr(4, 2);
    let dia = txtDataMes.substr(6, 2);
    dt = dia + "/" + mes + "/" + ano;

    let form = new FormData();
    form.append("ID_Tipo", txtID_Tipo);
    form.append("ID_Conta", txtID_Conta);
    form.append("DataMes", dt);
    form.append("Msg", txtMsg);
    form.append("Login_Autor", txtNameUser);

    let xmlHttl = new XMLHttpRequest();

    xmlHttl.onreadystatechange = function () {
        if (xmlHttl.readyState == 4 && xmlHttl.status == 200) {
            buscarMensagem(txtDataMes, txtID_Tipo, txtID_Conta, txtNameUser, txtValor);
        }
    }
    xmlHttl.open("POST", "/Home/EnviarMensagem", true);
    xmlHttl.send(form);
}