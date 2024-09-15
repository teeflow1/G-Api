import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: "Post One"},

    {id: 2, title: "Post Two"},

    {id: 3, title: "Post Three"},

    {id: 4, title: "Post Four"},

    {id: 5, title: "I Love Jesus"},

]



router.get('/', (req, res)=>{

    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
        res.json(posts);
          
});

router.get('/:id',  (req, res)=>{
    const id = parseInt(req.params.id);
    
    const post = posts.find((post) => post.id === id);

    if(!post){

        return res.status(400).json({mes: `Post with the id of ${id} was not found`});
    }
        res.status(200).json(post)

    //res.json(posts.filter((post) => post.id === id));
})

// Post request
router.post('/', (req, res) =>{


    const myPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!myPost.title) {

        return res.status(400).json({msg: 'Please include a title'})

    }

    posts.push(myPost);
    res.status(201).json(posts);

})


// Update Post
router.put('/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);


    if (!post) {
        return res.status(404).json({msg: `Post with the id of ${id} was not found`})
    }

    post.title = req.body.title;
    return res.status(200).json(posts);

});


// Delete Post

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);


    if (!post) {
        return res.status(404).json({msg: `Post with the id of ${id} was not found`})
    }

    posts = posts.filter((post) => post.id !== id);
    return res.status(200).json(posts);

});  


export default router;