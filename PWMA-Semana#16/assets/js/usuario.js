function deleteitem(index) {
    
    listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    item = listaUser.findIndex(x => x.id === index);
    listaUser.splice(item, 1);
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    tabelaupdate();
}

function alteritem(index) {
    listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    item = listaUser.findIndex(x => x.id === index);

    novoNome = prompt(`Editar nome de ${listaUser[item].nome}:`, listaUser[item].nome);
    novoEmail = prompt(`Editar email de ${listaUser[item].email}:`, listaUser[item].email);
    novaSenha = prompt(`Editar senha de ${listaUser[item].senha}:`, listaUser[item].senha);

    listaUser[item] = {
        "id": listaUser[item].id,
        "nome": novoNome,
        "email": novoEmail,
        "senha": novaSenha
    }
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    tabelaupdate();
}

function tabelaupdate() {
    listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    

    listaUser.forEach((valor, indice) => {
        if (indice == 0) {
            document.getElementById('tabelaDiv').innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Usuário</th>
                        <th>Senha</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id = "tabela">
                    <tr>
                        <td>${valor.id}</td>
                        <td>${valor.nome}</td>
                        <td>${valor.email}</td>
                        <td>${valor.senha}</td>
                        <td><button type="button" onclick = "deleteitem(${valor.id})"><img src = "delete.png" id = "imagemdelete"></button><button type= "button" onclick = "alteritem(${valor.id})"><img src = "alter.png" id = "imagemdelete"></button></td>
                    </tr>
                </tbody>
            </table>
            `
        } else {
            document.getElementById('tabela').innerHTML += `
            <tr>
                        <td>${valor.id}</td>
                        <td>${valor.nome}</td>
                        <td>${valor.email}</td>
                        <td>${valor.senha}</td>
                        <td><button type="button" onclick = "deleteitem(${valor.id})"><img src = "delete.png" id = "imagemdelete"></button><button type= "button" onclick = "alteritem(${valor.id})"><img src = "alter.png" id = "imagemdelete"></button></td>
                    </tr>
            `
        }
    });
}