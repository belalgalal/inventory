var db = require('../db');

var productService = {
    getProducts: function(callback) {
        return db.query('SELECT * FROM product', callback);
    },
    createProduct: function (product, callback) {
        return db.query('INSERT INTO product(title, description, price, quantity) VALUES(?, ?, ?, ?)',[product.title, product.description, product.price, product.quantity], callback);
    },
    getProduct: function(id, callback) {
        return db.query('SELECT * FROM product WHERE id = ?', [id], callback);
    },
    deleteProduct: function (id, callback) {
        return db.query('DELETE FROM product WHERE id = ?', [id], callback);
    }
}

module.exports = productService;