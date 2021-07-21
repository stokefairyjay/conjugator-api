import express from 'express';
import config  from './config';
import compression from 'compression';
import helper from './routes/helper';

const app: express.Application = express(); 
const port = config.port;

app.use(compression());

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        return res.status(200).json();
    }

    next();
}); 


app.use('/helper', helper); 


app.use((req, res, next) => {
    res.status(404).send(`${req.url} is not a valid resource here`);
});

app.use((err, req, res, next) => {
    console.trace();
    res.status(500).json('Internal server error');
});

process.on('uncaughtException', (err) => {
    console.trace();
    process.exit(1);
});

process.on('unhandledRejection', (reason: any, promise) => {
    console.trace();
    console.log(reason.message);
});


app.set('port', port);

export default app;