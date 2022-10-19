function mediana(lista){
    var listaOrdenada= lista.sort(function(a,b){
        return a - b;
    });
    console.log(listaOrdenada);
    let mitadLista =parseInt( listaOrdenada.length / 2);

    if(lista.length % 2 === 0){
        let elemento1 = lista[mitadLista - 1];
        let elemento2 = lista[mitadLista];
        let medianaListaPar = (elemento1 + elemento2) / 2
        
        return "la mediana par es " + medianaListaPar;
    }
    else{
        return "la mediana es "+ lista[mitadLista]
    }
}



const numbers = [ 5,10, 30, 50]

numbers.sort(
    function(a, b){
        if(a > b){
            return - 1;
        }
        if(a < b){
            return 1;
        }
        return 0;
    }
)

//Con la función de promedio anidada

function mediana2(lista){
    function calcularPromedio(lista){
        var sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoValor){
                return valorAcumulado + nuevoValor;
            }
        )
    
        const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    
        }
    let listaOrdenada = lista.sort(
        function(a,b){
            return a-b; 
        }
    )
    console.log(listaOrdenada);
    let mitadLista = parseInt(listaOrdenada.length /2); 

    if(listaOrdenada.length % 2 == 0){
        elemento1 = listaOrdenada[mitadLista - 1];
        elemento2 = listaOrdenada[mitadLista];

        return "Lista par: " + calcularPromedio([elemento1, elemento2]);
    }
    else{
        return "Lista impar: "+ listaOrdenada[mitadLista]
    }
}

// función que va conectada con el HTML:
let listaNumeros = [];

function agregarNumero(evt){
    evt.preventDefault()


    let numero = Number(document.getElementById("listaNumeros").value);

    
    listaNumeros.push(numero);

    let opcion = "<li> " +", " + numero +"</li>";
    let opcion1 ="<li> " + numero + "</li>"
    let listaDeNumeros = document.getElementById("listaPantalla");
    
    if(numero == ""){
        alert("Campo vacio, agrega un valor");
    }
    else if(listaNumeros.length <= 1){
        listaDeNumeros.innerHTML += opcion1;
    }
    else{
        listaDeNumeros.innerHTML += opcion;

    }
    
}

function medianaa(evt){
 
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

    let listaOrdenada = listaNumeros.sort(
        function(a,b){
            return a-b
        }
    )
    console.log(listaOrdenada);
    
    let resultado = 0;
    let mitadLista = parseInt(listaOrdenada.length /2); 

    if(listaOrdenada.length %2 == 0){
        elemento1 = listaOrdenada[mitadLista - 1];
        elemento2 = listaOrdenada[mitadLista];

        console.log(elemento1, elemento2)

        resultado = calcularPromedio([elemento1, elemento2]);
    }
    else{
        resultado = mitadLista;
    }
    console.log(resultado)


    // Mostrar resultado en la página: 
    let mostrarResultado = document.getElementById("form__resultado");
    mostrarResultado.innerText ="la mediana es: " + resultado;

}

//reiniciar valores:

let reiniciar = document.getElementById("reiniciar");

reiniciar.addEventListener('click', function(){
    location.reload();
})