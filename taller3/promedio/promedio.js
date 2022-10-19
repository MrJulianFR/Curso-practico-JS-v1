

function calcularPromedio(lista){
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // };

    var sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoValor){
            return valorAcumulado + nuevoValor;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
    }


    function calcularPromedio(lista){
        var sumaLista = 0;
        for(elemento of lista){
            sumaLista = elemento + sumaLista;
            console.log(elemento);
        }
    

    
        const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    
        }
    
// Funciones integradas al HTML:


let numeros = [];

function agregarNumero(evt){
    evt.preventDefault();

    let numero = Number(document.getElementById("listaNumeros").value);
    let numeroPantalla = document.getElementById("listaPantalla");
    let opcion1 = "<li>" + numero + "</li>";
    let opcion2 = "<li>" + ", " + numero + "</li>"

    if(numero == ""){
        alert("Campo vacío")
    }
    else if(numeros.length < 1){
        numeros.push(numero);
        numeroPantalla.innerHTML += opcion1;
    }
    else{
        numeros.push(numero);
        numeroPantalla.innerHTML += opcion2;
    }
}

function promedio(evt){
    evt.preventDefault();
    
    let numerosSumados = numeros.reduce(
        function(a,b){
            return a+b
        }
    )

    let resultado = document.getElementById("form__resultado");
    resultado.innerHTML = "El promedio es: "+ numerosSumados;
}

let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener('click', function(){
    location.reload();
})
