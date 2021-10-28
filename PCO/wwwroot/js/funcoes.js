function resolverNomeMes(data) {

    let dataConvertida = String(data);

    let todosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",// Vetor com todos os meses do Ano 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let anoCol = dataConvertida.substr(0, 4);
    let mesCol = dataConvertida.substr(4, 2);

    return todosMeses[parseInt(mesCol - 1)] + " / " + anoCol;
}