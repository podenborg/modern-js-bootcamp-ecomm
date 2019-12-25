const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/products');
const adminProductsRouter = require('./routes/admin/products');

const app = express();

// use middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['alsk2djfas43dio2wqd']
}));

// use route handlers
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);

app.listen(3000, () => {
  console.log('Listing on port 3000.');
})