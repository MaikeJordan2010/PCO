
////////////////////////////// ATUALIZAR //////////////////////////////
// função generica quer realizar as alterações de todos os campos

function atualizar(nome, id, valor, controle, UserLogin) {       // recebe os valores necessários para ralizar a alteração
                                                                // verifica se as teclas digitadas são de 0 a 9  ou enter = 13 ou 
    var partes = nome.split("-");                                                           // virgula = 44 ou o controle = codigo que serve para entrar na função sem digitar                                                        

    if ((event.keyCode >= 48) && (event.keyCode <= 57) || (event.keyCode == 13) || (event.keyCode == 44) || (controle == 1)) {

        if (event.keyCode == 13 || (controle == 1)) {           // verifica se a tecla digitada é enter = 13 ou controle = 1
                                 // realizando split do variavel nome e separando em partes, uma vez que nome tem varias informações sobre a celula
            let situacao = -2;                                  // declarando a situação padrão

            if (partes[0] == "valorSolicitado") {               // se o campo que receberá alteração for " valorSolicitado " a situação é -2
                situacao = -2;                                  // atribui o valor a situação
            } else if (partes[0] == "valorOrcado") {            // se o campo que receberá alteração for " valorOrcado " a situação é -1
                situacao = -1;                                  // atribui o valor a situação
            }

            let form = new FormData();                          // instanciando obj do tipo form
            form.append("valorRecebido", valor);                // add campo ao obj form
            form.append("Id_movimento", id);                    // add campo ao obj form
            form.append("nomeCampo", nome);                     // add campo ao obj form
            form.append("situacao", situacao);                  // add campo ao obj form



            let xmlHttp = new XMLHttpRequest();                 // declarando variavel do tipo XMLHttpRequest - serve para realizar requisições na web
            xmlHttp.onreadystatechange = function () {          // quando a variavel é carregada ela recebe uma função
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {   // se o readyState == 4 e status == 200 => executa o bloco de codigo
                    pesquisar();                                // chama a função pesquisar
                }
            };
            xmlHttp.open("POST", "/Home/AlterarCampos", true);  // abre a conexao com a controller, com o metodo POST e assincrono = true
            xmlHttp.send(form);                                 // envia o formulario
        }
    } else if (event.keyCode == 63) {
        event.returnValue = false;

        buscarMensagem(partes[1], partes[2], partes[3], UserLogin);

    } else {

        event.returnValue = false;                               // se a tecla digitada não for validada acima e evento retorna falso, não inserindo o caractere

    } 

}



