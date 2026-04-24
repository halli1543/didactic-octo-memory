const menu = [
    { food: 'pizza', day: 'mánudagur'},
    { food: 'pasta', day: 'þriðjudagur'},
    { food: 'lamb', day: 'miðvikudagur'},
    { food: 'steak', day: 'fimmtudagur'},
    { food: 'lobster', day: 'föstudagur'},
];

exports.GetHomePage = (req, res) => {
    res.render('index', { title: 'welcome to menu'});
};

exports.GetMenu = (req, res) => {
    res.render('menu', { title: 'menu', menu});
};