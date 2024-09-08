const express = require ('express');
const port = process.env.PORT || 5000
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/about', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})
    */
   

app.listen(port, ()  => console.log(`server is listening on port ${port}`))