const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get request for /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling post request for /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the Special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product updated'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted'
    });
});

module.exports = router;