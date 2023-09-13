const http = require('http');
const route = require('./route');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const {products} = require("./routes/admin");


const app = express();
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes.router);
app.use(shopRoutes);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    res.status(404).render(path.join(__dirname, './views/404.ejs'),
        {pageTitle: 'Page Not Found'});
    products.
});

app.listen(3001);