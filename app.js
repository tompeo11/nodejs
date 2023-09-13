const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const expressLayouts = require('express-ejs-layouts');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(shopRoutes);
app.use('/admin', adminRoutes.router);

app.use((req, res, next) => {
    res.status(404).render('error/404',
        {pageTitle: 'Page Not Found'});
});

app.listen(3001);