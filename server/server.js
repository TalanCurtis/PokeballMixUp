const express= require('express'),
    bodyParser= require('body-parser'),
    app = express(),
    port = 3300

app.use(bodyParser.json());

var leaderBoard = [{id:0, name: "Jonny5", score: 1},{id: 1, name: "Mikky", score: 0},{id: 2, name: "Zippy", score: 2}]
var id = 3

const leaderBoardBaseUrl = '/api/leaderBoard';
app.get( leaderBoardBaseUrl, (req, res)=>{
    leaderBoard = leaderBoard.sort((p1, p2)=>p2.score>p1.score)
    res.status(200).send(leaderBoard)
});

app.post( leaderBoardBaseUrl, (req, res)=>{
    console.log(req.body)
    req.body.id = id++
    leaderBoard.push(req.body)
    leaderBoard = leaderBoard.sort((p1, p2)=>p2.score>p1.score)
    res.status(200).send("Added new Player!")
});

app.put( leaderBoardBaseUrl,(req, res)=>{
    console.log(req.body)
    leaderBoard = leaderBoard.map(index => {
        if(index.id===req.body.id)
        {index.name=req.body.name}
        return index
    })
    leaderBoard = leaderBoard.sort((p1, p2)=>p2.score>p1.score)
    console.log(leaderBoard)
    res.status(200).send(leaderBoard)
})

app.delete( leaderBoardBaseUrl+'/:id', (req, res)=>{
    console.log('delete endpoint hit on server.')
    let idToDelete = req.params.id*1;
    console.log('id to delete = ',idToDelete)
    leaderBoard.splice(idToDelete, 1)
    console.log('leaderboard = ', leaderBoard)
    res.status(200).send(leaderBoard)
})

app.listen(port, ()=>{
    console.log(`listening on port:${port}`)
})