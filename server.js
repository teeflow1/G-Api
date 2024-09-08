const express = require ('express');
const port = process.env.PORT || 5000
const path = require('path');


const app = express();

//app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/about', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})
    */


let posts = [
    {id:1, title: "Post one"},
    {id:2, title: "Post two"},
    {id:1, title: "Post three"},

]


app.get('/api/post',  (req, res)=>{
    res.json(posts)
})
   

app.listen(port, ()  => console.log(`server is listening on port ${port}`))