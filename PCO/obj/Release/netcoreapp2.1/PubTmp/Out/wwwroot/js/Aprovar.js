
function Aprovar(nome, id, valor) {
    let partes = nome.split("-");

    let n = "valorOrcado-" + partes[1] + "-" + partes[2] + "-" + partes[3];

    atualizar(n, id, valor, 1);

}