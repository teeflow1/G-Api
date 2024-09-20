



let posts = [
    {id: 1, title: "Post One"},

    {id: 2, title: "Post Two"},

    {id: 3, title: "Post Three"},

    {id: 4, title: "Post Four"},

    {id: 5, title: "I Love Jesus"},

]


// Get Post
export const getPost = (req, res, next)=>{

    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
        res.json(posts);
          
}

// Get all Posts
export const getPosts = (req, res, next)=>{
    const id = parseInt(req.params.id);
    
    const post = posts.find((post) => post.id === id);

    if(!post){

        const error = new Error(`A Post with the id of ${id} was not found`)
        error.status = 300;
        return next(error);

        //return res.status(400).json({mes: `Post with the id of ${id} was not found`});
    }
        res.status(200).json(post)

    //res.json(posts.filter((post) => post.id === id));
}
//Create a Post

export const createPost = (req, res, next) =>{


    const myPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!myPost.title) {

        
        const error = new Error(`Please include Title`)
        error.status = 400;
        return next(error);

    }

    posts.push(myPost);
    res.status(201).json(posts);

}

// Update a post
export const updatePost = (req, res, next) => {

    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);


    if (!post) {
        const error = new Error(`A Post with the id of ${id} was not found`)
        error.status = 300;
        return next(error);
    }

    post.title = req.body.title;
    return res.status(200).json(posts);

}

// Delete Posts
export const deletePost = (req, res, next) => {

    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);


    if (!post) {
        const error = new Error(`A Post with the id of ${id} was not found`)
        error.status = 300;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    return res.status(200).json(posts);

}