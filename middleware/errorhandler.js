import colors from 'colors'


const errorHandler = (err, req, res, next) => {

    if (err.status) {
        res.status(err.status).json({message: err.message})
    } else {
    
        res.status(404).json({message: err.message})

    };

    
;
}

export default errorHandler