const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        messsage: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        messsage: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            messsage: 'You finally discovered the special ID',
            id: id
        });
    } else{
        res.status(200).json({
            messsage: 'You have passed an ID'
        })
    }

});

router.patch('/:productId', (req, res, next) => {
     res.status(200).json({
         message: 'Updated product!'
     });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product Deleted!'
    });
});

module.exports = router;
