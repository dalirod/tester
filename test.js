// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test ("One dollar should be 153,48 yenes", function(){
    //importar la funcion desde app.js
    const {fromDollarToYen } = require('./app.js')

    // se hace la prueba
    expect(fromDollarToYen(4)).toBe(613.92); // 1 dolar son 153,48 yenes, entonces 4 dolares son = (153*4)
    
    })
    
test ("One Yen should be 0.0062 pounds", function(){
    //importar la funcion desde app.js
    const {fromYenToPound } = require('./app.js')

    // se hace la prueba
    expect(fromYenToPound(1)).toBe(0.006254886630179828); // 1 yen son 0.0062 libras esterlinas.
    
    })