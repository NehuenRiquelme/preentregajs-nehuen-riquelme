// tienda de reposteria, vende tortas por kilo, el cliente pone cantidad, tipo de torta, da como resultados valores a pagar y costo de envio calculuado por cantidad de tortas compradas.
// variables globales
const tortaA = 100
const tortaB = 200
const tortaC = 1000

let cantidad; 
let tipodetorta;
let resultado;

//operacion multiplicar
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}
//paso 1: que nos diga por prompt la cantidad de kilos de torta que quiere llevar, sabiendo que 0. cierra el ciclo.
//paso 2: elija el tipo de torta que desee comprar, con A B y C.

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingresar de cuantos kilos quiere la torta, recuerde que 0 cero, termina la carga"));
    
    if (cantidad === 0){
        break;
    }

    tipodetorta = prompt("Ingrese el tipo de torta que quiera:\n\ -Si quiere torta tipo A ingrese = A \n\ -Si quiere torta tipo B ingrese = B \n\ -Si quiere torta tipo  C ingrese = C");
     
    switch (tipodetorta){
        case "A":
           resultado = multiplicar(tortaA, cantidad);
           alert("Debe abonar $ "+ resultado + " por su compra de torta tipo A");
           break;
        case "B":
            resultado = multiplicar(tortaB, cantidad);
            alert("Debe abonar $ "+ resultado + " por su compra de torta tipo B");
            break;
        case "C":
            resultado = multiplicar(tortaC, cantidad);
            alert("Debe abonar $ "+ resultado+ " por su compra de torta tipo C");
            break;
        default:
            alert("Operacion Invalida");
            break;
    }

    if (cantidad >= 4 ){
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=2 ){
        valorEnvio = 100
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 200
        alert("Su costo de envio es $"+ valorEnvio);
    }
}