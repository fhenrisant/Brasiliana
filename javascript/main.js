(()=>{ 
    "use strict"

const botaoEncomendaPao = document.querySelector(".cartao__botao--pao");
const listaEncomenda = document.querySelector(".lista__encomenda");

const itemEncomenda = document.createElement("li");
itemEncomenda.classList.add("item__encomenda");

let contadorPao = 0
    
    botaoEncomendaPao.addEventListener ("click",()=>{
        
        itemEncomenda.classList.remove("item__confirmado");
        contadorPao++;
    
        if (contadorPao < "2") {
        let conteudo = `${contadorPao} Pão`;
        itemEncomenda.innerHTML = conteudo;
        listaEncomenda.appendChild(itemEncomenda);
        }else{
        let conteudo = `${contadorPao} Pães`;
        itemEncomenda.textContent = conteudo;
        }
 
        itemEncomenda.appendChild(BotaoConfirmar());
        itemEncomenda.appendChild(BotaoExcluir());
        
    })


const ConfirmarEncomenda = (evento) => {
    
    const botaoConfirmado = evento.target;
    const itemConfirmado = botaoConfirmado.parentElement;
    itemConfirmado.classList.add("item__confirmado");
    itemConfirmado.textContent = "Encomenda adicionada";
    
    if(contadorPao == 1){
        var tipo = "Pão"
    }else{
        var tipo = "Pães"
    }
    
    GravarDados(contadorPao,tipo);
}


const BotaoConfirmar = ()=>{
    const botaoConfirmar = document.createElement("button");   
    botaoConfirmar.classList.add("item__confirmar");
    botaoConfirmar.innerText = "Confirmar";     
    botaoConfirmar.addEventListener("click",ConfirmarEncomenda);

    return botaoConfirmar;
}



const BotaoExcluir = ()=>{
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.addEventListener("click",ExcluirItem)

    return botaoExcluir;
}

const ExcluirItem = (evento)=>{
    const botaoExcluido = evento.target;
    const itemExcluido = botaoExcluido.parentElement;
    itemExcluido.textContent=" ";
    contadorPao = 0;
   return botaoExcluido; 
        
}


const GravarDados = (quantidade,tipo)=>{
    const dados = {
        quantidade: quantidade,
        tipo: tipo 
    }
    console.log(dados);
    const encomendas = JSON.parse(localStorage.getItem("encomenda")) || [];
    const encomendasAtualizadas = [...encomendas,dados];
    localStorage.setItem("encomenda",JSON.stringify(encomendasAtualizadas));
    contadorPao = 0;  
}



})()