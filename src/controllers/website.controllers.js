const { render } = require('express/lib/response');
const menu = require('../views/menu');

exports.GetHomePage = (req, res, next) => {
    try {
        res.render('index', { title: 'welcome to website'});
    } catch (err) {
        next(err)
    }
};

exports.GetMenu = (req, res, next) => {
    try {
        res.render('menu', { menu });
    } catch (err) {
        next(err);
    }
};