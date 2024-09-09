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
    {id:3, title: "Post three"},

]


app.get('/api/posts/',  (req, res)=>{
    res.json(posts)
})

app.get('/api/posts/:id',  (req, res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
})
   



app.listen(port, ()  => console.log(`server is listening on port ${port}`))