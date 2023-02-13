const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require ('express-handlebars');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Staticconfig
app.use(express.static(path.join(__dirname,'public')));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

console.log("PATH:" + path.join(__dirname, 'resources/views'))
app.set('views',path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('new');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})