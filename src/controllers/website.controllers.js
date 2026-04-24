const menu = require('../data/menu');

exports.GetHomePage = (req, res, next) => {
    try {
        res.render('index', { title: 'welcome to menu website'});
    } catch (err) {
        next(err)
    }
};

exports.GetMenu = (req, res, next) => {
    try {
        res.render('menu', 'menu', menu);
    } catch (err) {
        next(err);
    }
};