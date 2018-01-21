const express= require('express'),
    bodyParser= require('body-parser'),
    app = express(),
    port = 3300

app.use(bodyParser.json());

var leaderBoard = [{id:0, name: "Jonny5", score: 2},{id: 1, name: "Mikky", score: 1},{id: 2, name: "Zippy", score: 0}]
var id = 3

const leaderBoardBaseUrl = '/api/leaderBoard';
app.get( leaderBoardBaseUrl, (req, res)=>{
    res.status(200).send(leaderBoard)
});

app.post( leaderBoardBaseUrl, (req, res)=>{
    console.log(req.body)
    req.body.id = id++
    leaderBoard.push(req.body)
    res.status(200).send("Added new Player!")
});

app.put( leaderBoardBaseUrl,(req, res)=>{
    res.status(200).send("updated leaderboard")
})
app.delete( leaderBoardBaseUrl, (req,res)=>{
    res.status(200).send("removed player from leaderboard")
})


app.listen(port, ()=>{
    console.log(`listening on port:${port}`)
})