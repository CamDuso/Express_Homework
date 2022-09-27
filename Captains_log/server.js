
const express = require("express");
const app = express();

app.use(express.static('public')); 
//tells express to try to match requests with files in the directory called 'public'

const mongoose = require("mongoose");

const methodOverride = require("method-override");

const Log = require ('./Models/logs')

require("dotenv").config();

app.set ('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log("I am here for routes")
    next();
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

//--------------------------------------> Middleware

app.get("/logs", (req, res) => {
    Log.find({}, (err, allLogs) =>{
      console.log(err)
  
      res.render('Index', {
          logs: allLogs
      })
    })
  });

app.get ('/logs/new', (req, res) => {
    res.render ('New', {})
})

//----->Post Route

app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    }
    else {
        req.body.shipIsBroken = false
    }
    Log.create (req.body, (err, createdLog) => {
        console.log(err)
    })
    res.redirect('/logs')
    
})

app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    }
    else {
        req.body.shipIsBroken = false
    }
    Log.findByIdAndUpdate (req.params.id, req.body, (err, createdLog) => {
        console.log(err)
    })
    res.redirect('/logs')
    
})


app.get("/logs/seed", (req, res) => {
    console.log(Log)
  Log.create(
    [
      {
        Title: "First Entry",
        Date: "09/23/2022",
        Entry: 'First Entry Data Here',
        shipIsBroken : false
      },
      {
        Title: "Second Entry",
        Date: "09/23/2022",
        Entry: 'Second Entry Data Here',
        shipIsBroken : false
      },
      {
        Title: "Third Entry",
        Date: "09/23/2022",
        Entry: 'Third Entry Data Here',
        shipIsBroken : false
      },
    ],
    (err, data) => {
      res.redirect("/logs");
    }
  );
});

app.get("/logs/:id", (req, res) => {
    Log.findById(req.params.id, (err,foundLog) => {
        console.log(err)
      console.log("Found: ", foundLog);
      res.render("Show", {
        log: foundLog,
      });
    });
  });


app.get("/logs/:id/edit", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
      console.log(err)
      if (!err) {
        res.render("Edit", {
          log: foundLog,
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });


app.delete("/logs/:id", (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/logs");
    });
  });



app.listen("3000", () => {
  console.log("Listening on port 3000");
});


