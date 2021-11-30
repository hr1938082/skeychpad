const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

app.use("/static", express.static('./resources/views/icons'));

const viewPath = path.join(__dirname, '/resources/views');

app.set('view engine', 'hbs');
app.set('views', viewPath);

app.get('/', (req, res) => res.render('sketchpad'));

app.listen('8000', () => console.log("Listining"));