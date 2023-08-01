// importar la función sum del archivo app.js
const { fromDollarToYen } = require('./app.js');

// comienza tu primera prueba
test('adds 10 * 127.9 to equal 1279', () => {
    //dentro de la prueba llamamos a nuestra función fromDollarToYen
    let total = fromDollarToYen(10);

    // // esperamos que la multiplicasion de 10 entre 127.9 sea 1279
    expect(total).toBe(1279);
});