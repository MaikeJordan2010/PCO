
////////////////////////// FUNÇÃO DE APROVAÇÃO DO VALOR /////////////////////////////////

function Aprovar(nome, id, valor) {                                         //função recebe as informações necessárias para aprovar o valor
    let partes = nome.split("-");                                           // realiza o split separando o valor para mudar o nome da coluna para valorOrcado

  let n = "valorOrcado-" + partes[1] + "-" + partes[2] + "-" + partes[3];   // concatena o nome valorOrcado com as demais informações

    atualizar(n, id, valor, 1);                                             // chama a função atualizar passando os valores necessários
}