const express = require('express');
const path = require('path');

const websiteRoutes = require('./src/routes/website.Routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, src/views));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', websiteRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { title: 'page not found'});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('server error');
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost${PORT}`)
})