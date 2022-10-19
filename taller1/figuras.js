// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();



console.group("Triágulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 +lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

console.group("Circulos");

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
} 
function circunferenciaCirculo(radio){
    let circunferencia = diametroCirculo(radio) * PI;
    return circunferencia.toFixed(3);
}
function areaCirculo(radio){
    let resultado = (radio * radio) * PI;
    return resultado.toFixed(3);
}

console.groupEnd();

// Función hecha por mí:

// const laditoCuadrado = prompt("¿Cuánto mide un lado del cuadrado? ");
// function cuadrado(ladoCuadrado){
//     const perimetroCuadrado = ladoCuadrado * 4;
//     const areaCuadrado = ladoCuadrado * ladoCuadrado;

//     console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
//     console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + " cm");
//     console.log("El área del cuadrado es: "+ areaCuadrado + " cm^2");
// }
// cuadrado(laditoCuadrado);


//Interactuamos con el HTML

//CUADRADO

function calcularPerimetroCuadrado(evt){
    const form = document.getElementById("form__container");
    evt.preventDefault();
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    const resultado = document.getElementById("resultCuadrado");
    resultado.innerHTML = "EL PERÍMETRO ES: " + perimetro;
    
    form.reset()
}


function calcularAreaCuadrado(evt){
    evt.preventDefault();
    const form = document.getElementById("form__container");


    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const resultado = document.getElementById("resultCuadrado");
    resultado.innerHTML = "EL ÁREA ES: " + area;


    form.reset()

}

//TRIÁNGULO

function calcularPerimetroTriangulo(evt){
    const form = document.getElementById("form__container2");
    evt.preventDefault();

    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);
    
    const perimetro = perimetroTriangulo(value1, value2, valueBase);

    const resultado = document.getElementById("resultPerimetroTriangulo");
    resultado.innerHTML = "EL PERÍMETRO ES: " + perimetro;

    form.reset();
}

function calcularAreaTriangulo(evt){
    const form = document.getElementById("form__container2-2")
    evt.preventDefault();

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);
    const inputBase = document.getElementById("InputTrianguloBaseArea");
    const valueBase = Number(inputBase.value);

    const area = areaTriangulo(valueBase, valueAltura);
    const resultado = document.getElementById("resultAreaTriangulo");
    resultado.innerHTML = "EL ÁREA ES: " + area;

    form.reset();

}

// function calcularAreaTriangulo(){
//     const inputAltura = document.getElementById("InputTrianguloAltura");
//     const valueAltura = Number(inputAltura.value);
//     const inputBase = document.getElementById("InputTrianguloBase");
//     const valueBase = Number(inputBase.value);

//     const area = areaTriangulo(valueBase, valueAltura);
//     alert("EL área del triángulo es: " + area)
// }


// CIRCULO
function calcularCircunferenciaCirculo(evt){
    const form = document.getElementById("form__container-3")
    evt.preventDefault();

    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = inputRadio.value;

    let circunferencia = circunferenciaCirculo(valueRadio);

    let resultado = document.getElementById("resultCirculo");
    resultado.innerHTML = "LA CIRCUNFERENCIA ES: " + circunferencia;

    form.reset();


}
function calcularAreaCirculo(evt){
    const form = document.getElementById("form__container-3")
    evt.preventDefault();

    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);

    let resultado = document.getElementById("resultCirculo");
    resultado.innerHTML = "EL ÁREA ES: " + area;
    form.reset();

}

// Triángulo isosceles. Calcular altura

function calcularAlturaIsoceles(evt){
    const form = document.getElementById("form__container-4")
    evt.preventDefault();

    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("InputBase");
    const valueBase = Number(inputBase.value);

    let resultado = document.getElementById("resultTriangulo");
    
    if(valueLado1 == valueLado2){
        const altura = Math.sqrt((valueLado1 * valueLado2) - (valueBase * valueBase / 4));
        resultado.innerHTML = "LA ALTURA ES: "+ altura.toFixed(2);
    }
    else{
        resultado.innerHTML = "NO ES UN TRIÁNGULO ISÓCELES"
    }
    form.reset();

}

// calcularAlturaIsoceles(5,5,8);
