import { TeacherRoutes } from './app/routes/TeacherRoutes';
import Express from "express";
import config from "./config";
import { json } from 'stream/consumers';

export class Server {

    private _app: Express.Application;

    constructor() {
        this._app = Express();
        this.config();
        this.routes();
        this.middleware();
    }

    private config(): void {
        this._app.set('port', config.port)
    }

    private middleware(): void {
        this._app.use(Express,json)
        this._app.use(Express.urlencoded({extended: false}));

    }

    private routes(): void {
        const teacherRoutes = new TeacherRoutes();
        this._app.use('/api/teachers', teacherRoutes.getRoutes());
    }

    public start(): void{

        this._app.listen( 
            config.port, () =>{
                console.log(`Server corriendo por el puerto ${config.port}`);

            }
        )
    }



}