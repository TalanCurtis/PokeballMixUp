const express= require('express'),
    bodyParser= require('body-parser'),
    app = express(),
    port = 3300


app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`listening on port:${port}`)
})