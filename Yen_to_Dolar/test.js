// importar la función fromYenToPound del archivo app.js
const { fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 10000 * 0.8 to equal 8000', () => {
    //dentro de la prueba llamamos a nuestra función fromYenToPound
    let total = fromYenToPound(10000);

    // esperamos que la multiplicasion de 10000 entre 0.8 sea 8000
    expect(total).toBe(8000);
});