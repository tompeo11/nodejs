const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const expressLayouts = require('express-ejs-layouts');
const exceptionController = require('./controllers/exception-controller');
const mongoConnect = require('./util/mongodb').mongoConnect


const app = express();


app.use(express.urlencoded({extended: false}));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/images', express.static(__dirname + '/images/'));
app.use('/asset', express.static(__dirname + '/asset/'));

app.use(shopRoutes);
app.use('/admin', adminRoutes.router);

app.use(exceptionController.handle404);

mongoConnect(() => {
    app.listen(3001)
});