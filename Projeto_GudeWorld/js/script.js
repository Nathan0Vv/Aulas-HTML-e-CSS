/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Catálogo de Bolinhas de Gude
Aluno 1: Nathan Vieira - 240652 
Aluno 2: Gustavo Brasil Bordini - 252212
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// 1 - Botão voltar ao topo

const btnTopo = document.getElementById("btnTopo");

if(btnTopo){
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 300){
            btnTopo.style.display = "block";
        }else{
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

// 2 - Validação formulário

const formulario = document.getElementById("formContato");

if(formulario){
formulario.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    });
}

// 3 - Tema escuro

const btnTema = document.getElementById("btnTema");

if(localStorage.getItem("tema") === "escuro"){
    document.body.classList.add("tema-escuro");
}

if(btnTema){
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-escuro");
        if(document.body.classList.contains("tema-escuro")){
            localStorage.setItem("tema", "escuro");
        }else{
            localStorage.setItem("tema", "claro");
        }
    });
}

// 4 - Destaque JS nos cards

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 15px 25px rgba(0,0,0,.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 5px 10px rgba(0,0,0,.1)";
    });
});