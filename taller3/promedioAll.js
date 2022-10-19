
// Mediana

let listaNumerosMediana = [];

function agregarNumeroMediana(evt){
    let form = document.getElementById("formularioMediana");
    evt.preventDefault()


    let numero = Number(document.getElementById("listaNumerosMediana").value);

    
    listaNumerosMediana.push(numero);

    let opcion = "<li> " +", " + numero +"</li>";
    let opcion1 ="<li> " + numero + "</li>"
    let listaDeNumeros = document.getElementById("listaPantallaMediana");
    
    if(numero == ""){
        alert("Campo vacio, agrega un valor");
    }
    else if(listaNumerosMediana.length <= 1){
        listaDeNumeros.innerHTML += opcion1;
    }
    else{
        listaDeNumeros.innerHTML += opcion;

    }

    form.reset()
    
}

function mediana(evt){
 
    evt.preventDefault();

    function calcularPromedio(lista){
        let sumaLista = lista.reduce(
            function(a, b){
                return a + b;
            }
        )
        let promedioLista = sumaLista / lista.length;

        return promedioLista;
    }

    let listaOrdenada = listaNumerosMediana.sort(
        function(a,b){
            return a-b
        }
    )
    
    let resultado = 0;
    let mitadLista = parseInt(listaOrdenada.length /2); 
    console.log(mitadLista, listaOrdenada.length)

    if(listaOrdenada.length % 2 === 0){
        elemento1 = listaOrdenada[mitadLista - 1];
        elemento2 = listaOrdenada[mitadLista];

        console.log(elemento1, elemento2)

        resultado = calcularPromedio([elemento1, elemento2]);
    }
    else{
        resultado = listaOrdenada[mitadLista];
    }
    console.log(resultado)


    // Mostrar resultado en la página: 
    let mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerHTML ="la mediana es: " + resultado;

}

//reiniciar valores:

function reiniciarMediana(){
    const mostrarEnPantalla = document.getElementById("listaPantallaMediana");
    mostrarEnPantalla.innerHTML = "";
    listaNumerosMediana = [];

    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerHTML = "";

}
//Moda

let listaNumerosModa = [];

function agregarNumeroModa(evt){
    const form = document.getElementById("formularioModa")
    evt.preventDefault();
    
    let numero = document.getElementById("listaNumerosModa").value;
    let mostrarEnPantalla = document.getElementById("listaPantallaModa")
    let opcion1 = "<li> " + numero + "</li>"
    let opcion2 = "<li> " +", " + numero + "</li"

    if(numero == ""){
        alert("agrega un valor");
    }
    else if(listaNumerosModa.length < 1){
        listaNumerosModa.push(numero);
        mostrarEnPantalla.innerHTML += opcion1;
    }
    else{
        mostrarEnPantalla.innerHTML += opcion2;   
        listaNumerosModa.push(numero);
    }

    form.reset();
}

function moda(evt){

    evt.preventDefault();

    let listaCount = {};
    
    listaNumerosModa.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }
            else{
                listaCount[elemento] = 1
            }
        }
    )
    let listaArray = Object.entries(listaCount).sort(
        function(a, b){
            return a[1]-b[1];
        }
    ) 
    
    let mostrarResultado = document.getElementById("resultadoModa");
    let valueCompare1 = listaArray[listaArray.length -1]
    let valueCompare2 = listaArray[listaArray.length -2]

    if(listaArray.length == 1){
        let valorRepetido = listaArray[0]
        mostrarResultado.innerHTML = "Mismo valor: " + valorRepetido[0];
        
    }
    else if(valueCompare1[1] == valueCompare2[1]){
        mostrarResultado.innerHTML = "No hay moda";
    }
    else{
        let ultimoArray = listaArray[listaArray.length-1];
        mostrarResultado.innerHTML = "La moda es: "+  ultimoArray[0];
    }

}

function reiniciarModa(){
    const mostrarEnPantalla = document.getElementById("listaPantallaModa");
    mostrarEnPantalla.innerHTML = "";
    listaNumerosModa = [];

    const mostrarResultado = document.getElementById("resultadoModa");
    mostrarResultado.innerHTML = "";

}

// Promedio

let numerosPromedio = [];

function agregarNumeroPromedio(evt){
    const form = document.getElementById("formularioPromedio")
    evt.preventDefault();

    let numero = Number(document.getElementById("listaNumerosPromedio").value);
    let numeroPantalla = document.getElementById("listaPantallaPromedio");
    let opcion1 = "<li>" + numero + "</li>";
    let opcion2 = "<li>" + ", " + numero + "</li>"

    if(numero == ""){
        alert("Campo vacío")
    }
    else if(numerosPromedio.length < 1){
        numerosPromedio.push(numero);
        numeroPantalla.innerHTML += opcion1;
    }
    else{
        numerosPromedio.push(numero);
        numeroPantalla.innerHTML += opcion2;
    }

    form.reset();
}

function promedio(evt){
    const form = document.getElementById("formularioPromedio")
    evt.preventDefault();
    
    let promedio = numerosPromedio.reduce(
        function(a,b){
            return a+b
        }
    )

    let resultado = document.getElementById("resultadoPromedio");
    resultado.innerHTML = "El promedio es: "+ promedio;

    form.reset();
}
function reiniciarPromedio(){
    let resultado = document.getElementById("resultadoPromedio");
    resultado.innerHTML = "";

    let numeroPantalla = document.getElementById("listaPantallaPromedio");
    numeroPantalla.innerHTML = "";
    numerosPromedio = [];
}
//Resultado de la multiplicación de nota y crédito
let numerosPonderadoMultiplicado = [];

//Créditos almacenados
let numerosPonderadoCreditos =[];

function agregarNumerosPonderado(evt){
    evt.preventDefault();
    const form = document.getElementById("formularioPonderado");

    let nota =Number(document.getElementById("listaNumerosNota").value);
    let porcentaje = Number(document.getElementById("listaNumerosPorcentaje").value) ;
    let notaPantalla = document.getElementById("pantallaPonderadoNota");
    let porcentajePantalla = document.getElementById("pantallaPonderadoPorcentaje");
    


    let opcion1Nota = "<li>" + nota + "</li>";
    let opcion1Porcentaje = "<li>" + porcentaje + "</li>";

    let opcion2Nota = "<li>" +  ", "  + nota + "</li>";
    let opcion2Porcentaje = "<li>" + ", " + porcentaje + "</li>";

    let numeroMultiplado = nota * porcentaje;

    if(nota && porcentaje == ""){
        alert("No pueden haber campos vacíos")
    }
    else if(numerosPonderadoMultiplicado.length < 1){
        notaPantalla.innerHTML = " Nota: " + opcion1Nota;
        porcentajePantalla.innerHTML = " Porncetaje: "+ opcion1Porcentaje;
        numerosPonderadoMultiplicado.push(numeroMultiplado);
        numerosPonderadoCreditos.push(porcentaje);
    }
    else{
        notaPantalla.innerHTML += opcion2Nota;
        porcentajePantalla.innerHTML += opcion2Porcentaje; 
        numerosPonderadoMultiplicado.push(numeroMultiplado);
        numerosPonderadoCreditos.push(porcentaje);

    }
    console.log(numeroMultiplado)

    form.reset();

}

function ponderado(evt){
    evt.preventDefault();
    const form = document.getElementById("formularioPonderado");


    let sumaPrimera = numerosPonderadoMultiplicado.reduce(
        function(a=0,b){
           return a + b;
        }
    )
    let sumaSegunda = numerosPonderadoCreditos.reduce(
        function(a=0,b){
            return a+b;
        }
    )


    let ponderado = sumaPrimera / sumaSegunda;

    let resultado = document.getElementById("resultadoPonderado");
    resultado.innerHTML = "El ponderado es: "+ ponderado.toFixed(2);


    form.reset();
}
function reiniciarPonderado(){
    numerosPonderadoCreditos = [];
    numerosPonderadoMultiplicado = [];

    const form = document.getElementById("formularioPonderado");
    form.reset();

    let resultado = document.getElementById("resultadoPonderado");
    resultado.innerHTML = "";

    let notaPantalla = document.getElementById("pantallaPonderadoNota");
    notaPantalla.innerHTML = "";
    let porcentajePantalla = document.getElementById("pantallaPonderadoPorcentaje");
    porcentajePantalla.innerHTML = "";


}