// En función 
function calcularPrecioConDescuento(precio, descuento){
    const precioConDescuento = [precio *(100 - descuento)]/100; 
    return precioConDescuento;
}

//Función conectada al html con Onclick 
// Arrays y switch Colocar la o al final del nombre de la function

function OnCLickCalcularPrecioConDescuent(){
    const inputPrecio = document.getElementById("precio");
    const valuePrecio = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    let valueDescuento = inputDescuento.value;

    var cupones =["mamita_loca", "papas_arrechas","diagnostico_mercenario"];

    switch(true){
        case valueDescuento === cupones[0]:
            valueDescuento = 30;
            break;
        case valueDescuento === cupones[1]:
            valueDescuento = 15;
            break
        case valueDescuento === cupones[2]:
            valueDescuento = 10;
            break
        default:
            valueDescuento = 0;
    }

    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$" + precioConDescuento;   
}

//Con if y array.include

function OnCLickCalcularPrecioConDescuent(){
    const inputPrecio = document.getElementById("precio");
    const valuePrecio = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    let valueDescuento = inputDescuento.value;

    var cupones =["mamita_loca", "papas_arrechas","diagnostico_mercenario"];

    if(!cupones.includes(valueDescuento)){
        alert("El cupón " + valueDescuento + " no es válido")
    }
    else if(valueDescuento === cupones[0]){
        valueDescuento = 15;
    }
    else if(valueDescuento === cupones[1]){
        valueDescuento = 20;
    }
    else if(valueDescuento === cupones[2]){
        valueDescuento = 25;
    }


    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$" + precioConDescuento;   
}


// arrays con objetos.

function OnCLickCalcularPrecioConDescuento(){
    const inputPrecio = document.getElementById("precio");
    const valuePrecio = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    let valueDescuento = inputDescuento.value;

    const cupones = [
        {
            name: "mamita_loca",
            discount: 15
        },
        {
            name: "papas_arrechas",
            discount: 20
        },
        {
            name: "diagnostico_mercenario",
            discount: 20
        }
    ]

    const userCoupon = cupones.find(function(cupon){
        return cupon.name === valueDescuento;
    }
    );
    
    if(!userCoupon){
        alert("El cupon "+ valueDescuento + " no es valido")
    }
    else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(valuePrecio, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = precioConDescuento;
    }
}





