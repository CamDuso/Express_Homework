const express = require ('express')
const app = express (); 
app.set('view engine', 'ejs')

const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting', function (req, res){
    res.send ('HOWDY NEIGHBOR')
})

app.get ('/', function (req, res){
    res.send ('HOWDY NEIGHBOR')
})

app.get('/greeting/:name', function (req, res){
    res.send ('Good to see you, ' + req.params.name)
})

//Fibonacci
app.get ('/fibonacci/:num', function (req, res){
    let fibonacci = []

    if(req.params.num === fibonacci){
        res.send('Very Good, it is a fibonacci number')
    }
    else{
        res.send ('I can tell this is not a fibonacci number')
    }

})

app.get('/tip/:total/:tipPercentage', function(req, res){
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt (req.params.tipPercentage)
    let tipTotal = (total*(tipPercentage/100)).toString()
    res.send(tipTotal)
})

app.get('/magic', function (req, res){
    res.send ('Ask a Question in the URL')
})

app.get('/magic/:question', function (req, res){
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    res.send('<h1>' + req.params.question + "? " + randomAnswer +  '</h1>')
})

app.listen(3000, function (req, res) {
    console.log ('Listening on port 3000');
})
