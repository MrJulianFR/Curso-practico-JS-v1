// // Helpers

// function esPar(numero){
//     return numero % 2 === 0
// }

//  function calcularPromedio(lista){
//      var sumaLista = lista.reduce(
//          function(valorAcumulado = 0, nuevoValor){
//              return valorAcumulado + nuevoValor;
//          }
//      )

//      const promedioLista = sumaLista / lista.length;

//      return promedioLista;

//      }

// // Calculadora de mediana

// // function medianaSalario(lista){
// //     let mitad = parseInt(lista.length /2);

// //     if(esPar(lista.length)){
// //         let numeroMitad1 = lista[mitad]
// //         let numeroMitad2 = lista[mitad - 1]

// //         return calcularPromedio([numeroMitad1, numeroMitad2])
// //     }
// //     else{
// //         return lista[mitad]
// //     }

// // }

// //  Lista de los salarios del pais
 
// let salariosCol = colombia.map(
//     function(salario){
//         return salario.salary
//     }
// )

// let salarioColOrdenado = salariosCol.sort(
//     function(a,b){
//         return a-b
//     }
// )

// // Mediana general   


// const medianaGeneral = medianaSalario(salarioColOrdenado);


// //Mi intento calcular mediana del top 10%
// let porcentaje10 = salarioColOrdenado.length * 0.9; 

// let listaTop10 = salarioColOrdenado.filter(
//     function(elemento){
//         return elemento >= salarioColOrdenado[porcentaje10];
//     }
// )

// // Mediana top 10% con splice

// let spliceStart = parseInt(salarioColOrdenado.length * 0.9);
// let spliceEnd = salarioColOrdenado.length - spliceStart;

// let salarioTop10 = salarioColOrdenado.splice(spliceStart, spliceEnd);

// const medianaTop10 = medianaSalario(salarioTop10)

// // Mediana top 10% con slice

// let sliceStart = parseInt(salarioColOrdenado.length * 0.9);
// let sliceEnd = salarioColOrdenado;

// let salarioTop10Slide = salarioColOrdenado.slice(sliceStart, sliceEnd)

// // Resultados

// console.log(
//     {
//         medianaTop10,
//         medianaGeneral
//     }
// )


//Aplicado al html

let valorSalarios = [];

function agregarNumeros(evt){
    const form = document.getElementById("form__container")
    evt.preventDefault();

    let salario = Number(document.getElementById("numbers").value);
    let numeroPantalla = document.getElementById("listNumerosPantalla");
    let opcion1 = "<li>" + salario + "</li>";

    if(salario == ""){
        alert("Campo vacío");
    }
    else{
        valorSalarios.push(salario);
        numeroPantalla.innerHTML += opcion1;
    }

    form.reset();
}


 function esPar(numero){     
    return numero % 2 === 0 
}


function calcularMediana(evt){
    evt.preventDefault()
    const form = document.getElementById("form__container")

    let listaOrdenada = valorSalarios.sort(function(a,b){
        return a-b;
        }
    )
    let resultado = document.getElementById("ResultP");
    let valorMitad = parseInt(listaOrdenada.length /2);
    let numeroMitad = listaOrdenada[valorMitad -1]
    let numeroMitad2 = listaOrdenada[valorMitad]
    
    if(esPar(listaOrdenada.length)){

        valorFinal = (numeroMitad + numeroMitad2) / 2;

        resultado.innerHTML = valorFinal
    }
    else{
        valorFinal = numeroMitad;
        resultado.innerHTML = valorFinal;
    }

    form.reset();

}



//top 10: 

//helpers
function calcularPromedio(lista){
    var sumaLista = lista.reduce(
       function(valorAcumulado = 0, nuevoValor){
           return valorAcumulado + nuevoValor;
       }
   )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

 function mediana(lista){
     let mitad = parseInt(lista.length /2);
     if(esPar(lista.length)){
         let numeroMitad1 = lista[mitad]
         let numeroMitad2 = lista[mitad - 1]
         return calcularPromedio([numeroMitad1, numeroMitad2])
     }
     else{
         return lista[mitad]
     }
 }

function calcularTop10(evt){
    form = document.getElementById("form__container")
    evt.preventDefault();

    let listaOrdenada = valorSalarios.sort(function(a,b){
        return a-b;
        }
    )
    let sliceStart = parseInt(listaOrdenada.length * 0.9);
    let sliceEnd = listaOrdenada.length
    let ultimosElementos = listaOrdenada.slice(sliceStart,sliceEnd);


    let medianaTop10 = mediana(ultimosElementos);
    resultado = document.getElementById("ResultP");
    resultado.innerHTML = medianaTop10;

    form.reset();
}

function reinciarFormulario(){
    valorSalarios = [];
    form = document.getElementById("form__container")
    form.reset();
    resultado = document.getElementById("ResultP");
    resultado.innerHTML = "";
}