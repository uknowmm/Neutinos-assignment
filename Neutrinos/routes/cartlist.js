var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

router.get('/', function (req, res, next) {
   
    Cart.find()
         .exec(function (err, ganesh) {
             console.log(ganesh)
            if (err) {
                return res.status(500).json({
                    title: 'an error occured',
                    error: err
                 });
            }
              res.status(200).json({
                  product: 'success',
                 obj: ganesh
             });
         });
  });
 
 
 router.post('/', function (req, res, next) {
     
     var product = new Product(req.body);
     
     console.log(product)
     product.save(function (err, result) {
         console.log(product)
         if (err) {
             return res.status(500).json({
                 title: 'an error occured',
                 error: err
             });
         }
         res.status(201).json({
             product: 'saved product',
             obj: result
         })
     });
 
 });