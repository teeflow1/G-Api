import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
const port = process.env.STAT || 4000;
import logger from './middleware/logger.js'
import errorHandler from './middleware/errorhandler.js';
import notFound from './middleware/notFound.js';

const app = express();

//app.use(express.static(path.join, (__dirname, 'public')));


/*app.get('/good', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/about', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})
    */

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger Middleware

app.use(logger)

//Routers
app.use('/api/posts', posts);

//Error Handler
app.use(notFound);
app.use(errorHandler);








app.listen(port, ()  => console.log(`server is listening on port ${port}`))