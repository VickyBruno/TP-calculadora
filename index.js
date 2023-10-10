
const resul = document.getElementById("resultado"); /*Traigo el espacio donde va el resultado */
const btn = document.getElementsByClassName("tecla"); /*Voy a escuchar todos los botones */
const on = document.getElementById("on");
const off = document.getElementById("off");



btnArray = Array.from(btn); /*Transformo todos los botones en un array */
btnArray.forEach((boton) => {
    boton.addEventListener('click', () => {
        calculadora(boton, resul);
    });
});

for (var i in btnArray){
    btnArray[i].disabled = true;
    
}

function calculadora(boton, resul) {
    switch (boton.innerHTML) {
        case "C":
            borrar(resul);
            break;
        case "=":
            calcular(resul);
            break;
        default:
            actulizar(resul, boton);
            break;
    }
};

function calcular(resul) {

    resul.innerHTML = eval(resul.innerHTML);
}

function actulizar(resul, boton) {
    if (resul.innerHTML == 0) {
        resul.innerHTML = "";
    }

    resul.innerHTML += boton.innerHTML;
}

function borrar(resul) {
    resul.innerHTML = 0;
}


off.addEventListener('click', () => {
    resul.innerHTML = "";

    on.disabled = false;
    for (var i in btnArray){
        btnArray[i].disabled = true;
        
    }

});



on.addEventListener('click', () => {
    resul.innerHTML = "0";

    on.disabled = true;

    for (var i in btnArray){
        btnArray[i].disabled = false;
        
    }

});



