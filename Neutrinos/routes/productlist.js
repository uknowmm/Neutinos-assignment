var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');

 router.get('/', function (req, res, next) {
   
   Product.find()
        .exec(function (err, doc) {
            
           if (err) {
               return res.status(500).json({
                   title: 'an error occured',
                   error: err
                });
           }
             res.status(200).json({
                 product: 'success',
                obj: doc
            });
        });
 });


router.post('/', function (req, res, next) {
    
    var product = new Product(req.body);
    
    
    product.save(function (err, result) {
       
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

router.get('/cart', function (req, res, next) {
   
    Cart.find()
         .exec(function (err, doc) {
            
            if (err) {
                return res.status(500).json({
                    title: 'an error occured',
                    error: err
                 });
            }
              res.status(200).json({
                  product: 'success',
                 obj: doc
             });
         });
  });
 
 
 router.post('/cart', function (req, res, next) {
     
     var cart = new Cart(req.body);
     console.log(cart)
     cart.save(function (err, result) {
         console.log(result)
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


 router.delete('/cart/:id', function (req, res) {
  Cart.findById(req.params.id,function(err,cart){
      
      if(err){
          return res.status(500).json({
              title:'An error occur',
              error: err
          });
      }
      if(!cart){
          return res.status(500).json({
            title:'No cart found',
            error: {cart:'Message not found'}
        });
      }
      
      cart.remove(function(err,result){
          if(err){
              return res.status(500).json({
                title:'An error occur',
                error: err
            });
          }

          res.status(200).json({
              message:'delete',
              obj:result
          })
      })

  })
   
   

});

module.exports = router;