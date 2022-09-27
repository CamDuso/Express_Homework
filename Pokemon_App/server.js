
const express = require('express');
const pokemon = require('./models/pokemon');

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App')
})

app.get('/pokemon', (req, res) => {
    res.render('Index');
})

app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params;
    res.render('Show', {id});
})


app.listen(3000, () => {
    console.log('listening to port 3000');
})