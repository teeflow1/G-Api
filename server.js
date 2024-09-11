import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
const port = process.env.PORT || 5000;

const app = express();

//app.use(express.static(path.join, (__dirname, 'public')));


/*app.get('/good', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/about', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})
    */


//Routes
app.use('/api/posts', posts);


// Body Parser middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(port, ()  => console.log(`server is listening on port ${port}`))