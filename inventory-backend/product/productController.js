var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var productService = require('./productService');

router.get('/', function (req, res) {
    productService.getProducts(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).json({message: 'Product data is not correct'});
    }
    productService.createProduct(req.body,function(err,result){
        if(err)
        {
            res.status(400).json(err);
        }
        else {
            res.json({'id': result.insertId, ...req.body});
        }
    });
});

router.get('/:id', function (req, res) {
    productService.getProduct(req.params.id, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows && rows.length > 0 ? rows[0] : {});
        }
    });
});

router.delete('/:id', function (req, res) {
    productService.deleteProduct(req.params.id, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.json({message: `Deleted product with id ${req.params.id}`});
        }
    });
});

module.exports = router;