const nome = document.querySelector(".nome");
const telefone = document.querySelector(".telefone");
const email = document.querySelector(".email");
const mensagem = document.querySelector(".mensagem");
const opacidade = document.querySelectorAll(".opacidade");
const form = document.getElementById("form");

form.addEventListener ('submit', (Event)=>{
    Event.preventDefault();
    verificacaoDeTexto();
    verificacaoDeTelefone();
    verificacaoDeEmail();
    verificacaoDeMensagem();
});


function verificacaoDeTexto() {
    if (nome.value.length < 4) {
        console.log("erro ao digitar o nome")
        nome.style.border = "2px solid #f44336";
        opacidade[0].style.display = "block";
    }else{
        console.log("Nome aceito")
        nome.style.border = "2px solid #3CCC87";
        opacidade[0].style.display = "none";
    }
}
function verificacaoDeTelefone() {
    if (telefone.value.length < 9) {
        console.log("erro com o numero de telefone")
        telefone.style.border = "2px solid #f44336";
        opacidade[1].style.display = "block";
    }else{
        console.log("Telefone aceito")
        telefone.style.border = "2px solid  #3CCC87";
        opacidade[1].style.display = "none";
    }
};


function verificacaoDeEmail() {

    if (email.value.length < 6) {
        console.log("erro no endereço de email")
        email.style.border = "2px solid #f44336";
        opacidade[2].style.display = "block";
    }else{
        console.log("E-mail aceito")
        email.style.border = "2px solid  #3CCC87";
        opacidade[2].style.display = "none";
    }
};

function verificacaoDeMensagem() {

    if (mensagem.value.length < 4) {
        console.log("erro no campo de mensagem")
        mensagem.style.border = "2px solid #f44336";
        opacidade[3].style.display = "block";    
    }else{
        console.log("Mensagem aceita ")
        mensagem.style.border = "2px solid #3CCC87";
        opacidade[3].style.display = "none";
    }
};



