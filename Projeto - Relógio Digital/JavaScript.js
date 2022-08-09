let clock = () =>{
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    
    let dia = date.getDay();
    let mes = date.getMonth();
    let ano = date.getFullYear();

    if (6 <= hrs && hrs < 12) {

        document.body.style.backgroundImage = "url('bgdia.jpg')";
    
    }else if (12 <= hrs && hrs < 18) {
    
        document.body.style.backgroundImage = "url('bgtarde.jpg')";
    
    }else {
    
        document.body.style.backgroundImage = "url('bgnoite.jpg')";
    
    }
    
    
    

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    

    let time = `${hrs}:${mins}:${secs}`

    let day =  `${dia}/${mes}/${ano}`
   
    
   
    

    document.getElementById("clock").innerHTML = time;
    setTimeout(clock, 1000);
};

let data = () =>{
    let date = new Date();
    let dia = date.getDate()
    let mes = date.getMonth();
    let ano = date.getFullYear();
    
    

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    

    let day =  `${dia}/${mes}/${ano}`
   
    

    document.getElementById("data").innerHTML = day;
};




function week(){

    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var d = new Date();
    document.getElementById("week").innerHTML = semana[d.getDay()];
};


            
            
            



data();
clock();
week();

let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR OS CAMPINHOS
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}

input.addEventListener("keyup", function (event) {
  //SE TECLOU ENTER (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
