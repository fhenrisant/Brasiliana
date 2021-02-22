(()=>{ 

const botaoEncomendaPao = document.querySelector(".cartao__botao--pao");
const listaEncomenda = document.querySelector(".lista__encomenda");
const itemEncomenda = document.createElement("li");
itemEncomenda.classList.add("item__encomenda");

const CriarEncomenda = ()=>{
    
    let contadorPao = 0
    
    botaoEncomendaPao.addEventListener ("click",(evento)=>{
   
        contadorPao++;
    
        if (contadorPao < "2") {
        let conteudo = `${contadorPao} Pão`;
        itemEncomenda.innerHTML = conteudo;
        listaEncomenda.appendChild(itemEncomenda);
       
        }else{
        conteudo = `${contadorPao} Pães`;
        itemEncomenda.textContent = conteudo;
        }

        itemEncomenda.appendChild(BotaoConfirmar());
        itemEncomenda.appendChild(BotaoExcluir());
    })

}

const ConfirmarEncomenda = (evento) => {
    const botaoConfirmado = evento.target;
    const itemConfirmado = botaoConfirmado.parentElement;
    itemConfirmado.classList.add("item__confirmado");

}


const BotaoConfirmar = ()=>{
    const botaoConfirmar = document.createElement("button");   
    botaoConfirmar.classList.add("item__confirmar");
    botaoConfirmar.innerText = "Confirmar";     
    botaoConfirmar.addEventListener("click",ConfirmarEncomenda);

    return botaoConfirmar;
}

CriarEncomenda();

const BotaoExcluir = ()=>{
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.addEventListener("click",ExcluirItem)

    return botaoExcluir;
}

const ExcluirItem = (evento)=>{
    const botaoExcluido = evento.target;
    const itemExcluido = botaoExcluido.parentElement;
    itemExcluido.remove();
    CriarEncomenda();
    itemEncomenda.classList.remove("item__confirmado");

    return botaoExcluido;
        
    }
})()