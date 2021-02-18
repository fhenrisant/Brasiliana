const botaoEncomendaPao = document.querySelector(".cartao__botao--pao");
let contadorPao = 0
const listaEncomenda = document.querySelector(".lista__encomenda");
const itemEncomenda = document.createElement("li");
itemEncomenda.classList.add("item__encomenda");
botaoEncomendaPao.addEventListener ("click",(evento)=>{
    contadorPao++;
    evento.preventDefault;
    
    
    if (contadorPao < "2") {
        let conteudo = `${contadorPao}Pão`;
        itemEncomenda.innerHTML = conteudo;
        listaEncomenda.appendChild(itemEncomenda);
    }else{
        conteudo = `${contadorPao}Pães`;
        itemEncomenda.textContent = conteudo;
    }
   
});

const botaoEncomendaQueijo = document.querySelector(".cartao__botao--queijo");
botaoEncomendaQueijo.addEventListener ("click",(evento)=>{
    evento.preventDefault;
    console.log("Encomenda de Queijo")});

const botaoEncomendaTorta = document.querySelector(".cartao__botao--torta");
botaoEncomendaTorta.addEventListener ("click",(evento)=>{
    evento.preventDefault;
    console.log("Encomenda de Torta")});