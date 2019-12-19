const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express();

// use middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['alsk2djfas43dio2wqd']
}));

// use route handlers
app.use(authRouter);

app.listen(3000, () => {
  console.log('Listing on port 3000.');
})