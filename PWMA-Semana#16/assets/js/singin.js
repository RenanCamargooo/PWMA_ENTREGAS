let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.getElementById("usuario");
  let userLabel = document.querySelector('#userLabel')

  let senha = document.getElementById("senha");
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')
  let listaUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  item = listaUser.findIndex(x => x.email === usuario.value);
  console.log(item)

  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){

      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }

    }
  })

  if(usuario.value == listaUser[item].email && senha.value == listaUser[item].senha){
    window.location.href = '../../index.html'

    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom

    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }

}