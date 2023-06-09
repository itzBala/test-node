const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.arguments((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

module.exports = app;