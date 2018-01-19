const express= require('express'),
    bodyParser= require('body-parser'),
    app = express(),
    port = 3300

app.use(bodyParser.json());



const pokeApi = 'http://pokeapi.co/api/v2/pokemon/:id';
app.get( pokeApi, (req, res)=>{
    res.status(200).send(console.log("Poke Api Hit"))
});


app.listen(port, ()=>{
    console.log(`listening on port:${port}`)
})