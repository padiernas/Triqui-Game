let celdas=["","","","","","","","",""]
let jugadorActual="X"
let resultado=document.querySelector(".result")
let botones=document.querySelectorAll(".btn")

let condiciones=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

//Desde aca empieza la logica

const triki=(element,indice)=>{
    element.value=jugadorActual;
    element.disabled=true;
    celdas[indice]=jugadorActual;
    // jugadorActual=jugadorActual=="X"?"O":"X";
    if (jugadorActual=="X") {
        jugadorActual="O"
    } else {
        jugadorActual="X"
    }
    resultado.innerHTML=`Jugador ${jugadorActual}`
}

// botones.forEach((boton,indice)=>{
//     boton.addEventListener("click",()=>{alert(`${boton} - ${indice}`)})
// })

botones.forEach((boton,indice)=>{
    boton.addEventListener("click",()=>{triki(boton,indice)})
})

