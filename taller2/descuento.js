// Calcular descuento básico:

const precioOriginal = 100;
const descuento  = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});

// En función 
function calcularPrecioConDescuento(precio, descuento){
    const precioConDescuento = [precio *(100 - descuento)]/100; 
    return precioConDescuento;
}

//Función conectada al html con Onclick

function OnCLickCalcularPrecioConDescuento(){
    const inputPrecio = document.getElementById("precio");
    const valuePrecio = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    const valueDescuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$" + precioConDescuento;   
}

function reinciarFormulario(){
    const form = document.getElementById("form__container")
    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = "RESULTADO...";
    form.reset()
}

