module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.BOOLEAN, defaultValue: true
        },
    });

    return Product;
}