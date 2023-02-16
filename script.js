let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listElement = document.querySelector("#app ul");
let listaTarefas=JSON.parse(localStorage.getItem("@listaTarefas"))|| [];



function renderList(){
    listElement.innerHTML="";
    listaTarefas.map((nome)=>{
        let liElement= document.createElement('li');
        let nameLiElement=document.createTextNode(nome);

        let linkElement=document.createElement('a');
        linkElement.setAttribute("href", "#");
        linkNameElement=document.createTextNode(" Excluir");

        let posicao=listaTarefas.indexOf(nome);
        linkElement.setAttribute("onclick", `deletarItens(${posicao})`);

        listElement.appendChild(liElement);
        liElement.appendChild(nameLiElement);
        liElement.appendChild(linkElement);
        linkElement.appendChild(linkNameElement);
    })
}
renderList();
function adicionarTarefas(){
    if(inputElement.value===""){
        alert("Valor inválido");
        return false;
    }else{
        let novaTarefa=inputElement.value;
        inputElement.value="";
        listaTarefas.push(novaTarefa);
        renderList();
        salvarDados();
    }
}

function deletarItens(posicao){
    listaTarefas.splice(posicao,1);
    renderList();
    salvarDados();
}
function salvarDados(){
    localStorage.setItem("@listaTarefas",JSON.stringify(listaTarefas));
}
buttonElement.onclick=adicionarTarefas;