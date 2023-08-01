// importar la función sum del archivo app.js
const { fromEuroToDollar } = require('./app.js');

// comienza tu primera prueba
test('adds 1000 * 1.2 to equal 1200', () => {
    //dentro de la prueba llamamos a nuestra función fromEuroToDollar
    let total = fromEuroToDollar(1000);

    // // esperamos que la multiplicasion de 1000 entre 1.2 sea 1200
    expect(total).toBe(1200);
});