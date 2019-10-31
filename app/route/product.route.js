module.exports = function(app) {
 
    const products = require('../controller/product.controller.js');

    // Create a new product
    app.post('/api/product', products.create);

    // Retrieve all product
    app.get('/api/products', products.findAll);

    // Retrieve a single product by Id
    app.get('/api/product/:productId', products.findById);

    // Retrieve products Age
    app.get('/api/products/price/:price', products.findByPrice);

    // Update a product with Id
    app.put('/api/product/:productId', products.update);

    // Delete a product with Id
    app.delete('/api/product/:productId', products.delete);
}