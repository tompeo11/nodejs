exports.handle404 = (req, res, next) => {
    res.status(404).render('error/404', {
        pageTitle: 'Page Not Found'
    });
}