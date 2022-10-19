
function ponderado(){
    let lista1 = [
        {
            valor: 30,
            porcentaje: 50
        },
        {
            valor: 80,
            porcentaje: 30
        },
        {
            valor: 10,
            porcentaje: 20
        }
    ]
    

     let factor = lista.map(
         function(elemento){
             return elemento.valor * (elemento.porcentaje / 100);
         }
     )
     console.log(factor);

     let resultado = factor.reduce(
         function(a = 0,b){
             return a + b;
         }
     )
    return resultado;
 }

ponderado()



//Recibiendo los valores por inputs
function ponderado(){

    function valoresLista(valor, porcentaje){
      this.valor = valor,
      this.porcentaje = porcentaje;
   }
   let lista = [];
//    const continuar =parseInt(prompt("Cuantos elementos desea añadir: "));
   
  for(var i = 0; i <= continuar-1; i++){
        // let usuarioValor = parseInt(prompt("Introduce el valor "));
        // let usuarioPorcent = parseInt(prompt("Introduce el porcentaje "));

        let valorNuevo = new valoresLista(usuarioValor, usuarioPorcent);
        lista.push(valorNuevo);
    }


    let factor = lista.map(
        function(elemento){
            return elemento.valor * (elemento.porcentaje / 100);
        }
    )
    console.log(factor);

    let resultado = factor.reduce(
        function(a = 0,b){
            return a + b;
        }
    )

   return resultado;
}





//Fórmula del profe; hecha por mí

function ponderadoProfe(){
    let valores = [
        {
            nota: 10,
            credit: 2
        },
        {
            nota: 8,
            credit: 5
        },
        {
            nota: 10,
            credit: 20
        }
    ]

    let multiplicar = valores.map(
        function(elemento){
            return elemento.nota * elemento.credit
        }
    )

    let sumaPrimero = multiplicar.reduce(
        function(a=0,b){
            return a + b
        }
    )
    let sumaSegunda = valores.map(
        function(elemento){
            return elemento.credit 
        }
    )
    let multiplicarSegunda = sumaSegunda.reduce(
        function(a=0,b){
            return a + b
        }
    )
    
    return sumaPrimero / multiplicarSegunda

}



function ponderado2(){

}


