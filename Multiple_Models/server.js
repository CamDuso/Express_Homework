const express  = require('express')
const app = express();

const mongoose = require ('mongoose')
const methodOverride = require('method-override')

const Artist = require ('./Models/artists')

require('dotenv').config();

app.set ('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:false}))

app.use (methodOverride('_method'))

app.use((req, res, next) => {
    console.log("I am here for all routes")
    next();
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}) 

mongoose.connection.once ('open', () =>{
    console.log('Connected to database')
})


//---------------------------------------------->Middleware/Routes

app.get ('/artists', (req, res) =>{
    Artist.find({}, (err, allArtists) => {
        console.log(err)

        res.render('Index', {
            artists: allArtists
        })
    })
})


app.get("/artists/seed", (req, res) => {
    console.log(Artist)
  Artist.create(
    [
      {
        Name: "First Last"
      }
    ],
    (err, data) => {
      res.redirect("/artists");
    }
  );
});



app.get ('/artists/:id', (req, res) => {
    Artist.findById(req.params.id, (err, foundArtist) => {
        console.log(err)
        console.log("Found: ", foundArtist );
        res.render ('Show', {
            artist: foundArtist
        })
    })
})

app.delete("/artists/:id", (req, res) => {
    Artist.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/artists");
    });
  });




app.listen("3000", () => {
    console.log("Listening on port 3000");
  });
  