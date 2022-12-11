// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

//declaramos una funcion con el mismo nombre "dollarToYen"
const fromDollarToYen = function(valueInDollar){
//convertimos el valor a yenes
let valueInYenes = valueInDollar * 153.48;
// se retorna el valor
return valueInYenes;


}
//declaramos una funcion con el mismo nombre "yenToPound"
const fromYenToPound = function(valueInYenes){
    //convertimos el valor a libras
   
    let valueInPound = 0.8/ 127.9
    // se retorna el valor
    return valueInPound;
    
    
    }
    
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

