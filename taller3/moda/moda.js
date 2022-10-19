let numeros = [];
function agregarNumero(evt){
    evt.preventDefault();
    
    let numero = document.getElementById("listaNumeros").value;
    let mostrarEnPantalla = document.getElementById("listaPantalla")
    let opcion1 = "<li> " + numero + "</li>"
    let opcion2 = "<li> " +", " + numero + "</li"

    if(numero == ""){
        alert("agrega un valor");
    }
    else if(numeros.length < 1){
        numeros.push(numero);
        mostrarEnPantalla.innerHTML += opcion1;
    }
    else{
        mostrarEnPantalla.innerHTML += opcion2;   
        numeros.push(numero);
    }


    
}

function moda(evt){


    evt.preventDefault();

    let listaCount = {};
    
    numeros.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }
            else{
                listaCount[elemento] = 1
            }
        }
    )
    console.log(listaCount);

    let listaArray = Object.entries(listaCount).sort(
        function(a, b){
            return a[1]-b[1];
        }
    ) 
    let ultimoArray = listaArray[listaArray.length-1];
    let mostrarResultado = document.getElementById("form__resultado");
    mostrarResultado.innerHTML = ultimoArray[0];
}

let reiniciar = document.getElementById("reiniciar");

reiniciar.addEventListener('click', function(){
    location.reload();
}
)

