
//////////////////////////////////////////////////// GERANDO TABELA /////////////////////////////////////////////////////////////

function inserirObjetos(jsonRecebido, nivel, responsavel) {                         // função que cria a tabela com as informações - 
                                                                                    // recebe o objeto json, nivel e responsavel

    limparDados();

    let json = jsonRecebido;                                                        // variavel local recebendo o json
    responsavel = "<" + responsavel + ">";

    let chkSituacao = document.getElementById("chkSituacao").checked;               // declara variavel que recebe o valor de checked do checkbox
    let chkValorRealizado = document.getElementById("chkValorRealizado").checked;   // declara variavel que recebe o valor de checked do checkbox
    let chkDescricaoTipo = document.getElementById("chkDescricaoTipo").checked;     // declara variavel que recebe o valor de checked do checkbox
    let chkDescricaoConta = document.getElementById("chkDescricaoConta").checked;   // declara variavel que recebe o valor de checked do checkbox
    let chkTipo = document.getElementById("chkIdTipo").checked;                     // declara variavel que recebe o valor de checked do checkbox
    let chkConta = document.getElementById("chkIdConta").checked;                   // declara variavel que recebe o valor de checked do checkbox
   // let chkValorSolicitado = document.getElementById("chkValorSolicitado").checked; // declara variavel que recebe o valor de checked do checkbox


    let thead = document.querySelector("#cabecalho");                               // recebendo o cabecalho da tabela
    let tbody = document.querySelector("#conteudo");                                // recebendo o corpo da tabela
    



    //////////////////////////////////////////////////// GERANDO CABEÇALHO DA TABELA /////////////////////////////////////////////////////////////
    
    if (chkTipo == true) {                                                          // verificando se o chexkbox está checado
        let idT = document.createElement("th");                                     // cria elemento TH
        idT.textContent = "Tipo";                                                   // texto que vai aparecer no elemento
        idT.style.fontSize= "12px";                                                 // estilo
        idT.className = "cTipo";                                                    // class
        idT.style.fontSize = "14px";                                                // estilo
        idT.id = "coluna";                                                          // id do elemento
        idT.style.color = "#ffffff";                                                // cor do texto do elemento
        //idT.scope = "col";
        idT.style.backgroundColor = "#1759d3";                                      // cor de fundo do elemento
        thead.appendChild(idT);                                                     // add elemento TH no thead
    }   
    if (chkDescricaoTipo == true) {                                                 // verificando se o chexkbox está checado
        let Dt = document.createElement("th");                                      // cria elemento TH
        Dt.textContent = "Tipo Desc.";                                              // texto que vai aparecer no elemento
        Dt.id = "coluna";                                                           // id
        Dt.className = "cDescricaoTipo";                                            // class
        Dt.style.fontSize = "14px";                                                 // estilo
        Dt.style.color = "#ffffff";                                                 // estilo
       // Dt.scope = "col";
        Dt.style.backgroundColor = "#1759d3";                                       // estilo
        thead.appendChild(Dt);                                                      //// add elemento TH no thead
    }

    if (chkConta == true) {                                                         // verificando se o chexkbox está checado
        let idC = document.createElement("th");                                     // cria elemento TH
        idC.textContent = "Conta";                                                  // texto que vai aparecer no elemento
        idC.id = "coluna";                                                          // id
        idC.className = "cConta";                                                   // class
        idC.style.fontSize = "14px";                                                // estilo
        idC.style.backgroundColor = "#1759d3";                                      // estilo
        idC.style.color = "#ffffff";                                                // estilo
        thead.appendChild(idC);                                                     //// add elemento TH no thead
    }
    if (chkDescricaoConta == true) {                                                // verificando se o chexkbox está checado
        let Dc = document.createElement("th");                                      // cria elemento TH
        Dc.textContent = " Conta Desc. ";                                           // texto que vai aparecer no elemento
        Dc.id = "coluna";                                                           // id
        Dc.style.fontSize = "14px";                                                 // estilo
        Dc.className = "cDescricaoConta";                                           // class
        Dc.style.backgroundColor = "#1759d3";                                       // estilo
        Dc.style.color = "#ffffff";                                                 // estilo
        thead.appendChild(Dc);                                                      //// add elemento TH no thead
    }
    //class="table-light"
    for (let i = 0; i < json.horizonte; i++) {                                      // loop para gerar as colunas dinamicamente

        let ano = json.resultado[0].orcado[i].nomeColuna.substr(0, 4);              // pegando o ano de solictação do orçamento
        let mes = json.resultado[0].orcado[i].nomeColuna.substr(4, 2);              // pegando o mes de solictação do orçamento
        let data = new Date();                                                      // instanciando obj do tipo Date
        let todosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",// Vetor com todos os meses do Ano 
                  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        //let MesAno = resolverNomeMes(json.resultado[0].orcado[i].nomeColuna);

        let coluna = document.createElement("th");                                  // cria elemento TH
        coluna.textContent = todosMeses[parseInt(mes) - 1] + " / " + ano;           // texto que vai aparecer no elemento
        coluna.id = "coluna";                                                       // id
        coluna.className = "cOrcado";                                               // class
        coluna.scope = "col";                                                       // scopo
        coluna.style.backgroundColor = "#1759d3";                                   // estilo
        thead.appendChild(coluna);                                                  //// add elemento TH no thead

    
        if (chkValorRealizado == true) {                                            // verificando se o chexkbox está checado
            let vR = document.createElement("th");                                  // cria elemento TH
            vR.textContent = "V.Realizado";                                         // texto que vai aparecer no elemento
            vR.id = "coluna";                                                       // id
            vR.className = "cRealizado";                                            // class
            vR.scope = "col";                                                       // scopo
            vR.style.backgroundColor = "#1759d3";                                   // estilo
            thead.appendChild(vR);                                                  //// add elemento TH no thead
        }

        if (chkSituacao == true) {
            let s = document.createElement("th");                                   // verificando se o chexkbox está checado
            s.textContent = " S ";                                                  // texto que vai aparecer no elemento
            s.id = "coluna";                                                        // id
            s.scope = "col";                                                        // scopo
            s.className = "cSituacao";                                              // class
            s.style.backgroundColor = "#1759d3";                                    // estilo
            thead.appendChild(s);                                                   //// add elemento TH no thead
        }

    }


    //////////////////////////////// GERANDO LINHAS DA TABELA//////////////////////////////////////////////////////////////////////////////

    let cor;                                                                        // variavel de cor
    let j = 0;                                                                      // variavel j -> para criar o efeito zebra na tabela
    for (i in json.resultado) {                                                     // percorre todas objetos do json
        j++;                                                                        // soma + 1 ao valor de J
                
            if (j % 2 == 0) { cor = "#e5e3e3"; } else { cor = "#ffffff"; }          // se o resto da divisão for igual a zero cor = #e5e3e3 senão #ffffff
            let linha = document.createElement("tr");                               //  cria elemento TR que é uma linha na tabela
            linha.id = "linha";                                                     // id do elemento
            linha.style.backgroundColor = cor;                                      // definindo cor da linha


            if (chkTipo) {                                                          // se o checkbox estiver checked = true
                let id_tipo = document.createElement("td");                         // criando elemento td
                id_tipo.textContent = json.resultado[i].tipo.iD_Tipo;               // texto que vai se exibido
                id_tipo.id = "coluna";                                              // id
                id_tipo.className = "cTipo";                                        // class do elemento
                linha.appendChild(id_tipo);                                         // add elemento Td na no elemento Linha (Tr)
            }
            if (chkDescricaoTipo == true) {                                         // se o checkbox estiver checked = true
                let T_descricao = document.createElement("td");                     // criando elemento td
                T_descricao.textContent = json.resultado[i].tipo.descricao;         // texto que vai se exibido
                T_descricao.className = "cDescricaoTipo";                           // class do elemento
                T_descricao.id = "coluna";                                          // id
                linha.appendChild(T_descricao);                                     // add elemento Td na no elemento Linha (Tr)
            }
            if (chkConta) {                                                         // se o checkbox estiver checked = true
                let id_conta = document.createElement("td");                        // criando elemento td
                id_conta.textContent = json.resultado[i].conta.iD_Conta;            // texto que vai se exibido
                id_conta.id = "coluna";                                             // id do elemento
                id_conta.className = "cConta";                                      // class do elemento
                linha.appendChild(id_conta);                                        // add elemento Td na no elemento Linha (Tr)
            }

            if (chkDescricaoConta == true) {                                         // se o checkbox estiver checked = true
                let C_descricao = document.createElement("td");                      // criando elemento td
                C_descricao.textContent = json.resultado[i].conta.descricao;         // texto que vai se exibido
                C_descricao.id = "coluna";                                           // id do elemento
                C_descricao.className = "cDescricaoConta";                           // class do elemento
                linha.appendChild(C_descricao);                                      // add elemento Td na no elemento Linha (Tr)
            }


            // As colunas são geradas dinamicamente ou seja, não há um volume certo de colunas, para isso utlizamos outro laço e repetição

            for (let j = 0; j < json.horizonte; j++) {                              // percorre todas as colunas dinamicas do objeto

                let TdValores = document.createElement("td");                       // cria elemento Td
                TdValores.id = json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                TdValores.className = "tdValoresClass";
                let ValoresSalReal = document.createElement("td");                  // cria elemento Td



                ///////////////////////////// VALOR SOLICITADO ///////////////////////////////////

                var divValorSolicitado = document.createElement("div");             // cria elemento div
                divValorSolicitado.className = "input-group mb-1";                  // class do elemento

                var inputValorSolicitado = document.createElement("input");         // criando elemento inputValorSolicitado
                inputValorSolicitado.className = "form-control";                    // class do elemento
                inputValorSolicitado.type = "text";                                 // tipo do elemento
                inputValorSolicitado.style.height = "20px";                         // estilo
                inputValorSolicitado.style.fontSize = "10px";                       // estilo
                inputValorSolicitado.style.marginLeft = "0";                        // valor do elemento formatado para padrão moeda do brasileiro com 2 casas decimais
                inputValorSolicitado.value = parseFloat(json.resultado[i].orcado[j].valorSolicitado).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                                                                                    // verifica os caracteres digitados passando como parametro o nome, id, valor e controle = 0
                let msg = json.resultado[i].orcado[j].mensagem;
                inputValorSolicitado.setAttribute("onkeypress", "atualizar(this.name, this.id, this.value, 0,'" + responsavel + "')");
                                                                                    // o nome é junção de nome do campo, nome da coluna, tipo e conta
                inputValorSolicitado.name = "valorSolicitado-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                inputValorSolicitado.id = json.resultado[i].orcado[j].iD_Movimento; // id é o ID_movimento
                

                var divSifra = document.createElement("div");                       // criando elemento divSifra
                divSifra.className = "input-group-prepend";                         // class do elemento
                divSifra.setAttribute("onClick", " verificador(" + json.resultado[i].orcado[j].nomeColuna + ", " + json.resultado[i].tipo.iD_Tipo + ", " + json.resultado[i].conta.iD_Conta + ",'" + responsavel + "','" + json.resultado[i].conta.descricao +"',"+ json.resultado[i].orcado[j].valorSolicitado + ")"); //


                var spanSifra = document.createElement("span");                     // criando elemento spanSifra
                spanSifra.className = "input-group-text";
                spanSifra.textContent = "$";                                        // class do elemento
                spanSifra.style.height = "20px";                                    // estilo
                spanSifra.style.fontSize = "10px";                                  // estilo
                spanSifra.style.width = "20px";                                     // estilo

                var imgStickNote = document.createElement("img");
                imgStickNote.style.width = "20px";
                imgStickNote.setAttribute("onClick", " verificador(" + json.resultado[i].orcado[j].nomeColuna + ", " + json.resultado[i].tipo.iD_Tipo + ", " + json.resultado[i].conta.iD_Conta + ",'" + responsavel + "','" + json.resultado[i].conta.descricao + "'," + json.resultado[i].orcado[j].valorSolicitado + ")"); //

                if (json.resultado[i].orcado[j].autorUltimaMsg == 0) {
                    divValorSolicitado.appendChild(divSifra);                       // texto que vai aparecer na tela
                } else if (json.resultado[i].orcado[j].autorUltimaMsg == 2) {
                    imgStickNote.src = "../images/chat_On.png";
                    divValorSolicitado.appendChild(imgStickNote);
                } else if (json.resultado[i].orcado[j].autorUltimaMsg == 1) {
                    imgStickNote.src = "../images/chat_Off.png";
                    divValorSolicitado.appendChild(imgStickNote);
                } else if (json.resultado[i].orcado[j].autorUltimaMsg == 3) {
                    imgStickNote.src = "../images/chat_OK.png";
                    divValorSolicitado.appendChild(imgStickNote);
                }

                var btnAprovarValor = document.createElement("button");             // criando botão de aprovar
                btnAprovarValor.className = "btn btn-outline-secondary";            // class do elemento
                btnAprovarValor.type = "button";                                    // tipo do elemento
                btnAprovarValor.textContent = "Ok";                                 // texto do elemento
                btnAprovarValor.style.height = "20px";                              // estilo
                btnAprovarValor.style.fontSize = "8px";                             // estilo
                btnAprovarValor.style.backgroundColor = "green";                    // estilo
                btnAprovarValor.id = json.resultado[i].orcado[j].iD_Movimento;      // id
                                                                                    // nome do btn - nome + nomeDaColuna + tipo + conta
                btnAprovarValor.name = "btnAprovar-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                                                                                    // quando clicado chama a função aprovar passando nome, id, valor
                btnAprovarValor.setAttribute("onclick", "Aprovar(this.name, this.id, this.value)");
                var btnValor = json.resultado[i].orcado[j].valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                btnAprovarValor.value = btnValor;
                btnAprovarValor.style.display = "none";                             // display do botão do tipo none - invisivel


                var divBtnAprovar = document.createElement("div");                  // criando elemento divBtnAprovar
                divBtnAprovar.className = "input-group-append";                     // class do elemento
                

                divSifra.appendChild(spanSifra);                                    // divSifra add apanSifra
                divBtnAprovar.appendChild(btnAprovarValor);                         // divBtnAprovar add btnAprovarValor

                                           // divValorSolicitado add divSifra
                divValorSolicitado.appendChild(inputValorSolicitado);               // divinputValorSolicitado add inputValorSolicitado
                divValorSolicitado.appendChild(divBtnAprovar);                      // divValorSolicitado add divBtnAprovar

                ////////////////////////////////////////Valor orçado////////////////////////////////////////////////

                var divValorOrcado = document.createElement("div");                     // criação da divValorOrcado
                divValorOrcado.className = "input-group mb-1";                          // class da div

                var inputValorOrcado = document.createElement("input");                 // criação do inputValorOrcado
                inputValorOrcado.className = "form-control";                            // class do input
                inputValorOrcado.type = "text";                                         // tipo do input
                inputValorOrcado.style.height = "20px";                                 // estilo
                inputValorOrcado.style.fontSize = "10px";                               // estilo
                inputValorOrcado.style.marginLeft = "0";                                // valor do input formatado para moeda brasileira xxx.xxx,xx com duas casas decimais
                inputValorOrcado.value = json.resultado[i].orcado[j].valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                                                                                        // add nome do input que é a junção de nome do campo - nomedacoluna - tipo - conta
                inputValorOrcado.name = "valorOrcado-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                                                                                        // add id no input
                inputValorOrcado.id = json.resultado[i].orcado[j].iD_Movimento;
                                                                                        // caso tecle alguma letra a função é chamada passando o seguintes parametros, nome, id, valor e controle = 0
                inputValorOrcado.setAttribute("onkeypress", "atualizar(this.name, this.id, this.value,0)");
                inputValorOrcado.disabled = true;                                       // deixar campo desabilitado

                var divSpanOrcado = document.createElement("div");                      // criando divSpanOrcado
                divSpanOrcado.className = "input-group-prepend";                        // add class
                divSpanOrcado.setAttribute("onClick", " verificador(" + json.resultado[i].orcado[j].nomeColuna + ", " + json.resultado[i].tipo.iD_Tipo + ", " + json.resultado[i].conta.iD_Conta + ",'" + responsavel + "','" + json.resultado[i].conta.descricao + "'," + json.resultado[i].orcado[j].valorSolicitado + ")"); //


                var spanValorOrcado = document.createElement("span");                   // criando spanValorOrcado
                spanValorOrcado.className = "input-group-text";                         // add class
                spanValorOrcado.textContent = "$";                                      // texto que será exibido
                spanValorOrcado.style.height = "20px";                                  // estilo
                spanValorOrcado.style.fontSize = "10px";                                // estilo
                spanValorOrcado.style.width = "20px";                                   // estilo


                divSpanOrcado.appendChild(spanValorOrcado);                             // divSpanOrcado add spanValorOrcado

                divValorOrcado.appendChild(divSpanOrcado);                              // divValorOrcado 
                divValorOrcado.appendChild(inputValorOrcado);

               

                ///////////////////////////////////////////Regras/////////////////////////////////////////////////////////

                
                

                if (nivel == 0) {                                   // nivel zero é master

                    inputValorOrcado.disabled = false;              //  liberando edição do input valor orcado
                    inputValorSolicitado.disabled = true;           // bloqueando edição do input valor solicitado

                    if (json.resultado[i].tipo.responsavel == responsavel) { // 
                        inputValorSolicitado.disabled = false;
                    }

                }
               

                // se valorOrçado for diferente de ValorSolicitado e a situação menor ou igual a -1
                if (json.resultado[i].orcado[j].valor != json.resultado[i].orcado[j].valorSolicitado && json.resultado[i].orcado[j].situacao <= -1) {

                    inputValorSolicitado.style.backgroundColor = "#fcf8b5"; // muda a cor do input valorSolicitado para #fcf8b5

                    if (json.resultado[i].tipo.responsavel != responsavel) {// se o responsavel da conta for diferente do usuario logado
                        inputValorSolicitado.disabled = true;               // o input não pode ser editado
                    }

                }

                if (json.resultado[i].orcado[j].situacao == -2) {           // se a situação for = -2

                    inputValorSolicitado.style.color = "#ff0000";           // muda a cor da letra do input para #ff0000
                    
                    inputValorSolicitado.style.backgroundColor = "#fcf8b5"; // muda a cor do input para #fcf8b5
                    if (nivel == 0) {                                       // se o nivel for master = 0
                        btnAprovarValor.style.display = "block";            // o botão fica visivel
                    }
                }

                if (json.resultado[i].orcado[j].duplicado > 1) {            // se o orçamento tiver duplicado no banco de dados
                    TdValores.style.backgroundColor = "black";              // a celula fica preta
                    spanValorOrcado.style.backgroundColor = "black";        // span fica preto
                    spanSifra.style.backgroundColor = "black";              // span fica preto
                    inputValorSolicitado.disabled = true;                   // desabilita input
                    inputValorOrcado.disabled = true;                       // desabilita inpput
                    inputValorSolicitado.style.backgroundColor = "black";   // cor do input fica preto
                    inputValorOrcado.style.backgroundColor = "black";       // cor do input fica preto
                    btnAprovarValor.style.display = "none";                 // botão fica invisivel
                }

                if (json.resultado[i].orcado[j].valor == 0 && json.resultado[i].orcado[j].valorSolicitado == 0) {

                    var txtSit = document.getElementById("txtSituacao").value;

                    if (txtSit != 0) {
                        inputValorSolicitado.disabled = true;                   // desabilita input
                       inputValorOrcado.disabled = true;                       // desabilita inpput
                    }
                }
                    
                                                                            // declarando a  que recebe o valor do ano do orçamento
                let a = parseInt(json.resultado[i].orcado[j].nomeColuna.substr(0, 4));
                                                                            // declarando m que recebe o valor do ano do orçamento
                let m = parseInt(json.resultado[i].orcado[j].nomeColuna.substr(4, 2));
                                                                            // pegando a data atual do sistema
                let dt = new Date();


                if (a <= dt.getFullYear() && m <= dt.getMonth() + 1 || a < dt.getFullYear() || json.resultado[i].orcado[j].situacao >= 1 ) {      // se o ano e o mes forem igual ao mes e ano corrente 

                    inputValorSolicitado.disabled = true;                   // desabilita o input valor Solicitado
                    inputValorOrcado.disabled = true;                       // desabilita o input valor Orcado
                    btnAprovarValor.style.display = "none";                 // deixa o botão invisivel

                }

                TdValores.appendChild(divValorOrcado);                      // celula recebe a div do valor Orcado
                TdValores.appendChild(divValorSolicitado);                  // celula recebe a div do valor Solicitado
                        
                linha.appendChild(TdValores);                               // linha recebe a celula TdValores



                //////////////////////////////////////// VALOR REALIZADO ////////////////////////////////////////////////

                if (chkValorRealizado == true) { // verificando se o valor realizado deve ser exibido

                    var divValorRealizado = document.createElement("div");      // declarando elemento div
                        divValorRealizado .className = "input-group mb-1";      // declarando class do elemento
                        divValorRealizado.style.width = "100%";                 // estilo

                    var inputValorRealizado = document.createElement("input");  // declarando elemento input
                        inputValorRealizado.className = "form-control";         // class do elemento
                        inputValorRealizado.type = "text";                      // tipo do elemento
                        inputValorRealizado.style.height = "20px";              //estilo
                        inputValorRealizado.style.fontSize = "10px";            //estilo
                        inputValorRealizado.name = "ValorRealizado";            // nome do elemento
                        inputValorRealizado.id = "ValorRealizado";              // id do elemento
                                                                                // valor do elemento formatado para padrão brasileiro xx.xxx,xx
                        inputValorRealizado.value = "- " + json.resultado[i].orcado[j].valorRealizado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        inputValorRealizado.style.color = "red";                // estilo
                        inputValorRealizado.disabled = true;                    // deixando obj desabilitado

                    var divSpanRealizado = document.createElement("div");       // declarando elemento div
                        divSpanRealizado.className = "input-group-prepend";     // class do elemento
                        
                    var spanValorRealizado = document.createElement("span");    // criando elemento span
                        spanValorRealizado.className = "input-group-text";      // class do elemtento
                        spanValorRealizado.textContent = "$";                   // texto que aparecerá 
                        spanValorRealizado.style.height = "20px";               // estilo
                        spanValorRealizado.style.fontSize = "10px";             // estilo
                        spanValorRealizado.style.width = "20px";                // estilo


                        divSpanRealizado.appendChild(spanValorRealizado);       // add elemento span na divSpanRealizado

                        divValorRealizado.appendChild(divSpanRealizado);        // add elemento divSpanRealizado na divValorRealizado
                        divValorRealizado.appendChild(inputValorRealizado);     // add elemento divInputRealizado na diaValorRealizado

                    
                

                    //////////////////////////////////////// VALOR DO SALDO ////////////////////////////////////////////////

                
                                                                                // criando o elemento div  que vai receber o input com o saldo
                        var divValorSaldo = document.createElement("div");
                        divValorSaldo.className = "input-group mb-1";           // class do elemento
                        divValorSaldo.style.width = "100%";                     // estilo

                                                                                // criando o input que receberá o valor do saldo
                        var inputValorSaldo = document.createElement("input");
                        inputValorSaldo.className = "form-control";             // class do inpput
                        inputValorSaldo.type = "text";                          // tipo
                        inputValorSaldo.style.height = "20px";                  // add estilo
                        inputValorSaldo.style.fontSize = "10px";                // add estilo
                        inputValorSaldo.name = "ValorRealizado";                // nome do input
                        inputValorSaldo.id = "ValorRealizado";                  // id do input
                                                                                // add o valor no input => saldo = valorOrcado - valorRealizado      obs: o parseFloat é para conversção antes da conta
                        inputValorSaldo.value = "+ " + (parseFloat(json.resultado[i].orcado[j].valor) - parseFloat(json.resultado[i].orcado[j].valorRealizado)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits:2 });;
                        inputValorSaldo.disabled = true;                        // deixar a caixa de texto desabilitada para edção
                        if (((parseFloat(json.resultado[i].orcado[j].valor) - parseFloat(json.resultado[i].orcado[j].valorRealizado)) > 0)){ // se o valor de saldo > 0 a letra fica verde
                            inputValorSaldo.style.color = "#0cb740";            // cor verde
                        }


                        
                                                                                //criando elemento div  - padrão do bootstrap
                        var divSpanSaldo= document.createElement("div");
                        divSpanSaldo.className = "input-group-prepend";         // class do elemento

                                                                                // criando elemento span - padrão bootstrap
                        var spanValorSaldo = document.createElement("span");
                        spanValorSaldo.className = "input-group-text";          // classe do elemento
                        spanValorSaldo.textContent = "$";                       // texto que vai aparacer
                        spanValorSaldo.style.height = "20px";                   // estilo
                        spanValorSaldo.style.fontSize = "10px";                 //estilo
                        spanValorSaldo.style.width = "20px";                    //estilo

                                                                                
                        divSpanSaldo.appendChild(spanValorSaldo);               // add span na divSpanSaldo
                        
                        divValorSaldo.appendChild(divSpanSaldo);                // add elemento divSpanSaldo na divValorSaldo
                        
                        divValorSaldo.appendChild(inputValorSaldo);             //add elemento inpput na divValorSaldo

                        
                        ValoresSalReal.appendChild(divValorRealizado);         // add divValorRealizado no elmento TD(ValoresSalReal)
                       
                        ValoresSalReal.appendChild(divValorSaldo);              // add divValorSaldo no elmento TD(ValoresSalReal)
                         
                        linha.appendChild(ValoresSalReal);                      // add o elemento Td na linha
                }


////////////////////////////////////// SITUACAO ////////////////////////////////////////

                // criando a coluna de situação, só é criada caso o checkebox seja verdadeiro

                if (chkSituacao == true) {                      
                    let situacao = document.createElement("td");  // criando o elemento TD que vai ser adcionado a linha
                    let img = document.createElement("img"); // criando o elemento img que vai ser adicionado ao TD

                    situacao.className = "table-light"; // declarando a class 

                    img.className = "img-icone";

                    // atribuinfo a img da situação de acordo com o numero da situação
                    
                    if (json.resultado[i].orcado[j].situacao == 2) {
                        img.src = "../images/confirma.png";

                    } else if (json.resultado[i].orcado[j].situacao == 1) {
                        img.src = "../images/aprovado.png";

                    } else if (json.resultado[i].orcado[j].situacao == -1) {
                        img.src = "../images/legal.png";

                    } else if (json.resultado[i].orcado[j].situacao == 3) {
                        img.src = "../images/disquete.png";

                    } else if (json.resultado[i].orcado[j].situacao == -2) {
                        
                        img.src = "../images/alerta-vermelho.png";
                    }

                    situacao.appendChild(img);                      // add img a td
                    linha.appendChild(situacao);                    // add td a linha da tabela
                }
            }
////////////////////////////////////////////////////////////////
            tbody.appendChild(linha);                               // add  a linha na tabela
    }
    json = null;                                                    // anulando a variavel json para não sobrar resto da memoria;
}