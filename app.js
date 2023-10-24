const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const mainRouter = require('./routes/main');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRouter);

app.use((req, res, next) => {
    res.render('404');
});

app.listen(3000);