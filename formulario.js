const nome = document.querySelector(".nome");
const telefone = document.querySelector(".telefone");
const email = document.querySelector(".email");
const mensagem = document.querySelector(".mensagem");
const opacidade = document.querySelectorAll(".opacidade");
const form = document.getElementById("form");

form.addEventListener ('submit', (Event)=>{
    Event.preventDefault();
    console.log("ok");
    verificacaoDeTexto();
    verificacaoDeTelefone();
    verificacaoDeEmail();
    verificacaoDeMensagem();
});


function verificacaoDeTexto() {
    if (nome.value.length < 6) {
        console.log("erro")
        nome.style.border = "1px solid #f44336";
        opacidade[0].style.display = "block";
    }else{
        console.log("ok")
        nome.style.border = "1px solid #3CCC87";
        opacidade[0].style.display = "none";
    }
}
function verificacaoDeTelefone() {
    if (telefone.value.length < 9) {
        console.log("erro")
        telefone.style.border = "1px solid #f44336";
        opacidade[1].style.display = "block";
    }else{
        console.log("ok")
        telefone.style.border = "1px solid  #3CCC87";
        opacidade[1].style.display = "none";
    }
};

function verificacaoDeEmail() {
    if (email.value.length < 6) {
        console.log("erro")
        email.style.border = "1px solid #f44336";
        opacidade[2].style.display = "block";
    }else{
        console.log("ok")
        email.style.border = "1px solid  #3CCC87";
        opacidade[2].style.display = "none";
    }
};
function verificacaoDeMensagem() {
    const aviso = document.querySelector(".aviso");
    if (mensagem.value.length < 10) {
        console.log("erro")
        mensagem.style.border = "1px solid #f44336";
        opacidade[3].style.display = "block";
        aviso.style.padding = "20px 5px 5px 5px";
    }else{
        console.log("ok")
        mensagem.style.border = "1px solid #3CCC87";
        opacidade[3].style.display = "none";
        aviso.style.padding = "0px 5px 5px 5px";
    }
};


