const express = require('express');
const router = express.Router();

// Handles incoming GET Requests to /orders
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Orders were created'
    });
});


router.get('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message: 'You have the order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: ' You have deleted the order',
        orderId: req.params.orderId
    });
});

module.exports = router;
