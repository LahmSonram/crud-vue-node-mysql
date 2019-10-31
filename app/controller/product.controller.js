const db = require('../config/db.config.js');
const Product = db.products;

// Create 
exports.create = (req, res) => {
    Product.create({
        name: req.body.name,
        price: req.body.price
    }).then(product => {
        res.send(product);
    }).catch(err => {
        res.status(500).send("Error ->" + err);
    })
};

// FETCH All Product
exports.findAll = (req, res) => {
    Product.findAll().then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Find By ID
exports.findById = (req, res) => {
    Product.findById(req.params.productId).than(product => {
        res.send(product);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Find By Price
exports.findByPrice = (req, res) => {
    Product.findAll({
        where: {
            price: req.params.price
        }
    }).then(
        products => {
            res.send(products)
        }
    ).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

exports.update = (req, res) => {
    var product = req.body;
    const id = req.params.productId;
    Product.update(
        { name: req.body.name, price: req.body.price, active: req.body.active },
        { where: {id: req.params.productId} }
    ).then(() => {
        res.status(200).send(product);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

// Delete a product by Id
exports.delete = (req, res) => {
    const id = req.params.productId;
    Product.destroy({
      where: { id: id }
    }).then(() => {
      res.status(200).send('Product has been deleted!');
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    });
  };