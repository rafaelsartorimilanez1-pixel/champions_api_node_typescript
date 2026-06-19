import express, {Request, Response, json} from 'express';
import router from './routes';
import cors from 'cors'

function createApp(){
    
    const app = express();

    app.use(json())

    // const corsOptions = {
    //     origin:["http://rafa.system.com", "gov.br"],
    //     methods: ['GET', 'UPDATE']
    // }
    
    app.use(cors())
    app.use("/api", router)

    return app;
}

export default createApp;