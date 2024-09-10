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
    {id: 1, title: "Post One"},

    {id: 2, title: "Post Two"},

    {id: 3, title: "Post Three"},

    {id: 4, title: "Post Four"},

]


app.get('/api/posts/',  (req, res)=>{

    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
        res.json(posts);
          
});

app.get('/api/posts/:id',  (req, res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        res.status(400).json({mes: `Post with the id of ${id} does not exist`});
    }else{
        res.status(200).json(post)
    }


    //res.json(posts.filter((post) => post.id === id));
})
   



app.listen(port, ()  => console.log(`server is listening on port ${port}`))