import colors from 'colors';



const logger = (req, res, next) => {


const myColor = {
    GET: 'green',
    PUT: 'blue',
    POST: 'yellow',
    DELETE: 'red'
}

const color = myColor[req.method] || white


    console.log(`${req.method} ${req.protocol}:// ${req.get('host')} ${req.originalUrl}`
[color]);

    next();

}


export default logger