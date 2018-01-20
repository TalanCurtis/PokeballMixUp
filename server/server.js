const express= require('express'),
    bodyParser= require('body-parser'),
    app = express(),
    port = 3300

app.use(bodyParser.json());

var players = [{id:0, name: "Jonny5", score: 2},{id: 1, name: "Mikky", score: 1},{id: 3, name: "Zippy", score: 0}]


// const pokeApi = 'http://pokeapi.co/api/v2/pokemon/:id';
// app.get( pokeApi, (req, res)=>{
//     res.status(200).send(console.log("Poke Api Hit"))
// });


app.listen(port, ()=>{
    console.log(`listening on port:${port}`)
})