function inserirObjetos(jsonRecebido, nivel, responsavel) {

    limparDados();

    let json = jsonRecebido;
    

    let chkSituacao = document.getElementById("chkSituacao").checked;
    let chkValorRealizado = document.getElementById("chkValorRealizado").checked;
    let chkDescricaoTipo = document.getElementById("chkDescricaoTipo").checked;
    let chkDescricaoConta = document.getElementById("chkDescricaoConta").checked;
    let chkTipo = document.getElementById("chkIdTipo").checked;
    let chkConta = document.getElementById("chkIdConta").checked;
    let chkValorSolicitado = document.getElementById("chkValorSolicitado").checked;


    let thead = document.querySelector("#cabecalho");
    let tbody = document.querySelector("#conteudo");
    
    
    
    if (chkTipo == true) {
        let idT = document.createElement("th");
        idT.textContent = "Tipo";
        idT.style.fontSize= "12px";
        idT.className = "cTipo";
        idT.style.fontSize = "14px";
        idT.id = "coluna";
        idT.style.color = "#ffffff";
        //idT.scope = "col";
        idT.style.backgroundColor = "#1fa363";
        thead.appendChild(idT);
    }
    if (chkDescricaoTipo == true) {
        let Dt = document.createElement("th");
        Dt.textContent = "Tipo Desc.";
        Dt.id = "coluna";
        Dt.className = "cDescricaoTipo";
        Dt.style.fontSize = "14px";
        Dt.style.color = "#ffffff";
       // Dt.scope = "col";
        Dt.style.backgroundColor = "#1fa363";
        thead.appendChild(Dt);
    }

    if (chkConta == true) {
        let idC = document.createElement("th");
        idC.textContent = "Conta";
        idC.id = "coluna";
        idC.className = "cConta";
        idC.style.fontSize = "14px";
        idC.style.backgroundColor = "#1fa363";
        idC.style.color = "#ffffff";
        thead.appendChild(idC);
    }
    if (chkDescricaoConta == true) {
        let Dc = document.createElement("th");
        Dc.textContent = " Conta Desc. ";
        Dc.id = "coluna";
        Dc.style.fontSize = "14px";
        Dc.className = "cDescricaoConta";
        Dc.style.backgroundColor = "#1fa363";
        Dc.style.color = "#ffffff";
        thead.appendChild(Dc);
    }
    //class="table-light"
    for (let i = 0; i < json.horizonte; i++) {

        let ano = json.resultado[0].orcado[i].nomeColuna.substr(0, 4);
        let mes = json.resultado[0].orcado[i].nomeColuna.substr(4, 2);
        let data = new Date();
        let todosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let coluna = document.createElement("th");
        coluna.textContent = todosMeses[parseInt(mes) - 1] + " / " + ano;
        
        coluna.id = "coluna";
        coluna.className = "cOrcado";
        coluna.scope = "col";
        coluna.style.backgroundColor = "#1fa363";
        thead.appendChild(coluna);

        /*
        if (chkValorSolicitado == true) {

            var vS = document.createElement("th");
            vS.textContent = "V.Solicitado";
            vS.id = "coluna";
            thead.appendChild(vS);
        }
        */
        if (chkValorRealizado == true) {

            let vR = document.createElement("th");
            vR.textContent = "V.Realizado";
            vR.id = "coluna";
            vR.scope = "col";
            vR.style.backgroundColor = "#1fa363";
            thead.appendChild(vR);
        }

        if (chkSituacao == true) {
            let s = document.createElement("th");
            s.textContent = " S ";
            s.id = "coluna";
            s.scope = "col";
            //s.className = "bg-success";
            s.style.backgroundColor = "#1fa363";
            thead.appendChild(s);
        }

    }


    let cor;
    let borda;
    let j = 0;
    for (i in json.resultado) {
        j++;

        

            if (j % 2 == 0) { cor = "#e5e3e3"; } else { cor = "#ffffff"; }
            let linha = document.createElement("tr");
            linha.id = "linha";
            linha.style.backgroundColor = cor;


            if (chkTipo) {
                let id_tipo = document.createElement("td");
                id_tipo.textContent = json.resultado[i].tipo.iD_Tipo;
                id_tipo.id = "coluna";
                id_tipo.className = "cTipo";

                linha.appendChild(id_tipo);
            }
            if (chkDescricaoTipo == true) {
                let T_descricao = document.createElement("td");
                T_descricao.textContent = json.resultado[i].tipo.descricao;
                T_descricao.className = "cDescricaoTipo";
                T_descricao.id = "coluna";
                linha.appendChild(T_descricao);
            }
            if (chkConta) {
                let id_conta = document.createElement("td");
                id_conta.textContent = json.resultado[i].conta.iD_Conta;
                id_conta.id = "coluna";
                id_conta.className = "cConta";
                linha.appendChild(id_conta);
            }

            if (chkDescricaoConta == true) {
                let C_descricao = document.createElement("td");
                C_descricao.textContent = json.resultado[i].conta.descricao;
                C_descricao.id = "coluna";
                C_descricao.className = "cDescricaoConta";
                linha.appendChild(C_descricao);
            }

            for (let j = 0; j < json.horizonte; j++) {
               /* let classSolicitado = "table-light";
                let classOrcado = "table-success";
                let classRealizado = "table-light";

                let sifra = document.createElement("label");
                sifra.className = "sifra";
                sifra.textContent = "R$ ";

                let sifra1 = document.createElement("label");
                sifra1.className = "sifra";
                sifra1.textContent = "R$ ";

                let sifra2 = document.createElement("label");
                sifra2.className = "sifra";
                sifra2.textContent = "R$ ";
                */

                let TdValores = document.createElement("td");
                //TdValores.className = "table-light";
                /*
                let divValorOrc = document.createElement("div");
                divValorOrc.className = classOrcado;

                let divValorSol = document.createElement("div");
                divValorSol.className = classSolicitado;

                let lblSituacao = document.createElement("label");
                lblSituacao.textContent = json.resultado[i].orcado[j].situacao;
                lblSituacao.className = "lblSituacao";


                let btnAprovar = document.createElement("button");
                btnAprovar.textContent = "ok";
                btnAprovar.className = "btnAprovar";
                btnAprovar.id = json.resultado[i].orcado[j].iD_Movimento;
                btnAprovar.name = "btnAprovar-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                btnAprovar.setAttribute("onclick", "Aprovar(this.name, this.id, this.value)");
                btnAprovar.value = json.resultado[i].orcado[j].valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                btnAprovar.style.display = "none";

                let InputOrcado = document.createElement("input");
                InputOrcado.setAttribute("ondblclick", 'newPopup("' + json.resultado[i].orcado[j].mensagem + '" ,this.id)');
                InputOrcado.style = "background-color:none";
                InputOrcado.name = "valorOrcado-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                InputOrcado.id = json.resultado[i].orcado[j].iD_Movimento;
                InputOrcado.value = json.resultado[i].orcado[j].valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                InputOrcado.setAttribute("onkeypress", "atualizar(this.name, this.id, this.value,0)");
                InputOrcado.disabled = true;
                //InputOrcado.className("ValorOrcado");

                let InputSolicitado = document.createElement("input");
                InputSolicitado.type = "text";
                InputSolicitado.name = "valorSolicitado-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                InputSolicitado.id = json.resultado[i].orcado[j].iD_Movimento;
                InputSolicitado.setAttribute("onkeypress", "atualizar(this.name, this.id, this.value, 0)");
                InputSolicitado.value = json.resultado[i].orcado[j].valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                InputSolicitado.disabled = false;
                //InputSolicitado.setAttribute("onfocusin", "pegarNome(this.name,this.id,this.value)");



                if (nivel == 0) {

                    InputOrcado.disabled = false;
                    InputSolicitado.disabled = true;

                    if (json.resultado[i].tipo.responsavel == responsavel) {
                        InputSolicitado.disabled = false;
                    }

                }

                if (json.resultado[i].orcado[j].valor != json.resultado[i].orcado[j].valorSolicitado && json.resultado[i].orcado[j].situacao <= -1) {

                    divValorSol.className = "table-warning";

                    if (json.resultado[i].tipo.responsavel != responsavel) {
                        InputSolicitado.disabled = true;
                    }

                }

                if (json.resultado[i].orcado[j].situacao == -2) {

                    InputSolicitado.style = "color :#ff0000;";
                    divValorSol.className = "table-warning";
                    if (nivel == 0) {
                        btnAprovar.style.display = "block";
                    }
                }

                if (json.resultado[i].orcado[j].duplicado > 1) {
                    TdValores.style.backgroundColor = "black";
                    InputSolicitado.disabled = true;
                    InputOrcado.disabled = true;
                    divValorSol.style.backgroundColor = "black";
                    divValorOrc.style.backgroundColor = "black";
                    btnAprovar.style.display = "none";
                }

                //let a = parseInt(json.resultado[i].orcado[j].nomeColuna.substr(0, 4));
                //let m = parseInt(json.resultado[i].orcado[j].nomeColuna.substr(4, 2));
                //let dt = new Date();
               
                
                //if (a == dt.getFullYear() && m <= dt.getMonth() + 1) {

                //    InputSolicitado.disabled = true;
                //    InputOrcado.disabled = true;
                //    btnAprovar.style.display = "none";

                //}
                */

                ///////////////////////////// Valor Solicitado ///////////////////////////////////

                var divValorSolicitado = document.createElement("div");
                divValorSolicitado.className = "input-group mb-1";

                var inputValorSolicitado = document.createElement("input");
                inputValorSolicitado.className = "form-control";
                inputValorSolicitado.type = "text";
                inputValorSolicitado.style.height = "20px";
                inputValorSolicitado.style.fontSize = "10px";
                inputValorSolicitado.value = json.resultado[i].orcado[j].valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                inputValorSolicitado.setAttribute("onkeypress", "atualizar(this.name, this.id, this.value, 0)");
                inputValorSolicitado.name = "valorSolicitado-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                inputValorSolicitado.id = json.resultado[i].orcado[j].iD_Movimento;
                

                var divSifra = document.createElement("div");
                divSifra.className = "input-group-prepend";

                var spanSifra = document.createElement("span");
                spanSifra.className = "input-group-text";
                spanSifra.textContent = "$";
                spanSifra.style.height = "20px";
                spanSifra.style.fontSize = "10px";
                spanSifra.style.width = "20px";
                    
                

                var btnAprovarValor = document.createElement("button");
                btnAprovarValor.className = "btn btn-outline-secondary";
                btnAprovarValor.type = "button";
               // btnAprovarValor.id = "button-addon2";
                btnAprovarValor.textContent = "Ok";
                btnAprovarValor.style.height = "20px";
                btnAprovarValor.style.fontSize = "8px";
                btnAprovarValor.style.backgroundColor = "green";
                btnAprovarValor.id = json.resultado[i].orcado[j].iD_Movimento;
                btnAprovarValor.name = "btnAprovar-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                btnAprovarValor.setAttribute("onclick", "Aprovar(this.name, this.id, this.value)");
                btnAprovarValor.value = json.resultado[i].orcado[j].valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                btnAprovarValor.style.display = "none";


                var divBtnAprovar = document.createElement("div");
                divBtnAprovar.className = "input-group-append";
                

                divSifra.appendChild(spanSifra);
                divBtnAprovar.appendChild(btnAprovarValor);

                divValorSolicitado.appendChild(divSifra);
                divValorSolicitado.appendChild(inputValorSolicitado);
                divValorSolicitado.appendChild(divBtnAprovar);

                ////////////////////////////////////////Valor orçado////////////////////////////////////////////////

                var divValorOrcado = document.createElement("div");
                divValorOrcado.className = "input-group mb-1";

                var inputValorOrcado = document.createElement("input");
                inputValorOrcado.className = "form-control";
                inputValorOrcado.type = "text";
                inputValorOrcado.style.height = "20px";
                inputValorOrcado.style.fontSize = "10px";
                inputValorOrcado.value = json.resultado[i].orcado[j].valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                inputValorOrcado.name = "valorOrcado-" + json.resultado[i].orcado[j].nomeColuna + "-" + json.resultado[i].tipo.iD_Tipo + "-" + json.resultado[i].conta.iD_Conta;
                inputValorOrcado.id = json.resultado[i].orcado[j].iD_Movimento;
                inputValorOrcado.setAttribute("onkeypress", "atualizar(this.name, this.id, this.value,0)");
                inputValorOrcado.disabled = true;

                var divSpanOrcado = document.createElement("div");
                divSpanOrcado.className = "input-group-prepend";

                var spanValorOrcado = document.createElement("span");
                spanValorOrcado.className = "input-group-text";
                spanValorOrcado.textContent = "$";
                spanValorOrcado.style.height = "20px";
                spanValorOrcado.style.fontSize = "10px";
                spanValorOrcado.style.width = "20px";


                divSpanOrcado.appendChild(spanValorOrcado);

                divValorOrcado.appendChild(divSpanOrcado);
                divValorOrcado.appendChild(inputValorOrcado);

                ///////////////////////////////////////////Regras/////////////////////////////////////////////////////////


                if (nivel == 0) {

                    inputValorOrcado.disabled = false;
                    inputValorSolicitado.disabled = true;

                    if (json.resultado[i].tipo.responsavel == responsavel) {
                        inputValorSolicitado.disabled = false;
                    }

                }

                if (json.resultado[i].orcado[j].valor != json.resultado[i].orcado[j].valorSolicitado && json.resultado[i].orcado[j].situacao <= -1) {

                    inputValorSolicitado.style.backgroundColor = "#fcf8b5";

                    if (json.resultado[i].tipo.responsavel != responsavel) {
                        inputValorSolicitado.disabled = true;
                    }

                }

                if (json.resultado[i].orcado[j].situacao == -2) {

                    inputValorSolicitado.style.color = "#ff0000";
                    
                    inputValorSolicitado.style.backgroundColor = "#fcf8b5";
                    if (nivel == 0) {
                        btnAprovarValor.style.display = "block";
                    }
                }

                if (json.resultado[i].orcado[j].duplicado > 1) {
                    TdValores.style.backgroundColor = "black";
                    spanValorOrcado.style.backgroundColor = "black";
                    spanSifra.style.backgroundColor = "black";
                    inputValorSolicitado.disabled = true;
                    inputValorOrcado.disabled = true;
                    inputValorSolicitado.style.backgroundColor = "black";
                    inputValorOrcado.style.backgroundColor = "black";
                    btnAprovarValor.style.display = "none";
                }

                let a = parseInt(json.resultado[i].orcado[j].nomeColuna.substr(0, 4));
                let m = parseInt(json.resultado[i].orcado[j].nomeColuna.substr(4, 2));
                let dt = new Date();


                if (a == dt.getFullYear() && m <= dt.getMonth() + 1) {

                    inputValorSolicitado.disabled = true;
                    inputValorOrcado.disabled = true;
                    btnAprovarValor.style.display = "none";

                }



               // sifra.appendChild(InputOrcado)
               // divValorOrc.appendChild(sifra);
               // divValorOrc.appendChild(lblSituacao);
                        // //divValorOrc.appendChild(InputOrcado); // desatvado
               // divValorSol.appendChild(btnAprovar);
               // sifra1.appendChild(InputSolicitado);
               // divValorSol.appendChild(sifra1);

                //divValorSol.appendChild(InputSolicitado); desativa


                //TdValores.appendChild(divValorOrc);
                TdValores.appendChild(divValorOrcado);
                TdValores.appendChild(divValorSolicitado);
                
                linha.appendChild(TdValores);


                if (chkValorRealizado == true) {
                    let valorRealizado = document.createElement("td");
                    valorRealizado.className = "table-light";
                    valorRealizado.style.maxWidth = "80px";

                    let vRealizado = document.createElement("input");
                    vRealizado.name = "ValorRealizado";
                    vRealizado.id = "ValorRealizado";
                    vRealizado.value = json.resultado[i].orcado[j].valorRealizado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });;
                    vRealizado.style.backgroundColor = "none";
                    vRealizado.disabled = true;

                    valorRealizado.appendChild(sifra2);
                    //valorRealizado.style = "background-color: " + cor + "; border: 2px solid " + borda;
                    valorRealizado.appendChild(vRealizado);

                    linha.appendChild(valorRealizado);
                }

                if (chkSituacao == true) {
                    let situacao = document.createElement("td");
                    let img = document.createElement("img");

                    situacao.className = "table-light";

                    img.className = "img-icone";

                    if (json.resultado[i].orcado[j].situacao == 2) {
                        img.src = "../images/confirma.png";

                    } else if (json.resultado[i].orcado[j].situacao == 1) {
                        img.src = "../images/reprova.jpg";

                    } else if (json.resultado[i].orcado[j].situacao == -1 || json.resultado[i].orcado[j].situacao == -2) {
                        img.src = "../images/alerta.png";

                    } else if (json.resultado[i].orcado[j].situacao == 3) {
                        img.src = "../images/disquete.png";
                    }

                    situacao.appendChild(img);
                    linha.appendChild(situacao);
                }
            }

            tbody.appendChild(linha);
    }
    json = null;
}