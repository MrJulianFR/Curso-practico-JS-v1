let lista =[];
let elementos = 0;


function promedio(){
    let cantidad = prompt("Cuántos precios desea ingresar?");
    while(cantidad > elementos){
        let valorProducto = prompt("Ingrese el valor: " + elementos +":")

        lista.push(Number(valorProducto));
        elementos++;
    }
    let suma = 0;
    for(var i= 0; i < lista.length; i++){
         suma += lista[i];
    }
    let resultado = suma / precios.length;
    alert("El promedio es: " + resultado);
    let continuar = prompt("Presiona 1 si quieres repetir, 0 si no: ")
    if(continuar ==1){
        elementos = 0;
        suma = 0;
        resultado = 0;
        precios = [];
        promedio();
    }
    else{
        alert("Gracias por participar");
    }
}
promedio();