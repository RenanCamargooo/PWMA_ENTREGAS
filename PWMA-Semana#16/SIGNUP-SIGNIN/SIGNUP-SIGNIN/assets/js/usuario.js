function deleteitem(index) {
    let bancoString = localStorage.getItem("banco");
    let array = JSON.parse(bancoString) || [];
    item = array.findIndex(x => x.id === index);
    array.splice(item, 1);
    bancoString = JSON.stringify(array);
    localStorage.setItem("banco", bancoString);
    tabelaupdate(0);
}

function alteritem(index) {
    let bancoString = localStorage.getItem("banco");
    let array = JSON.parse(bancoString) || [];
    item = array.findIndex(x => x.id === index);

    novoNome = prompt(`Editar nome de ${array[item].nome}:`, array[item].nome);
    novoEmail = prompt(`Editar email de ${array[item].email}:`, array[item].email);
    novaSenha = prompt(`Editar senha de ${array[item].senha}:`, array[item].senha);

    array[item] = {
        "id": array[item].id,
        "nome": novoNome,
        "email": novoEmail,
        "senha": novaSenha
    }
    bancoString = JSON.stringify(array);
    localStorage.setItem("banco", bancoString);
    tabelaupdate(0);
}