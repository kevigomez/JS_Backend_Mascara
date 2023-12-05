const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");


const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

let TarjetaNumero = [];
let FechaNumero = [];
let cvvNumero = [];


inputTarjeta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
    //detienen comportamiento por defecto ,impide q el usuario ingrese caracteres q no quiero
    //usuario oprime tecla tabulador,retorne y no haga nad
    ingresoDatos(mascaraNumero, e.key, TarjetaNumero);

    inputTarjeta.value = TarjetaNumero.join("");
    //lo q usser ingresa va para el arreglo


    //escucha cuando se oprima una tecla
    // e guarde la tecla q oprime
});

//-------------------------------------------------------------------------------------------------------------------------------------------//


inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value=FechaNumero.join("");
    //aplica formato de fecha,la tecla q usuario oprimio,guarda lo q el usuario ingreso  va al arreglo de la fecha
});

//-------------------------------------------------------------------------------------------------------------------------------------------//

inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join("");
});

//-------------------------------------------------------------------------------------------------------------------------------------------//
function ingresoDatos(mascara, key, arreglo) {
    //numero aceptado,del 1 al 9
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (key === "Backspace" && arreglo.length > 0) {
        //si escribio algo y esta borrando y del arreglo se quitara el ultimo elemento q este borrando
        arreglo.pop();
        //borrara el ultimo elemento de 1 en 1
        return;
        //rompe el ciclo

        //validacion cuando este borrando
    }
    //si key incluye numeros
    //arreglo inferior de la capacidad
    //se partiran de 4 en 4
    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length) {
        if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/") {
            //si son 4 numeros se ira para el arrgelo del -
            //si son dos numeros se iran a arreglo de la fecha /
            arreglo.push(mascara[arreglo.length], key);

        } else {
            arreglo.push(key);
            //solo agregar lo q el usuario vaya escribiendo
        }

    }

};



