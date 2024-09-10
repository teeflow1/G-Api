import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: "Post One"},

    {id: 2, title: "Post Two"},

    {id: 3, title: "Post Three"},

    {id: 4, title: "Post Four"},

]


router.get('/',  (req, res)=>{

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
        return res.status(400).json({mes: `Post with the id of ${id} does not exist`});
    }
        res.status(200).json(post)

    //res.json(posts.filter((post) => post.id === id));
})
   


export default router;