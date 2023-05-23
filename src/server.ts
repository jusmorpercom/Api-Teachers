import { TeacherRoutes } from "./app/routes/TeacherRoutes";
import express from "express"; // Permite trabajar node en http para poder escuchar metodos 
import config from './config';

import cors from './app/middlewares/cors';
import morgan from './app/middlewares/logger-http';
import swaggerRouter from "./app/middlewares/swagger/swagger";

//& Encargado de crear la aplicacion y de que corra
export class Server {

    private _app: express.Application;

    constructor() {
        this._app = express();
        this.config(); // encargado de todas las variables de la app
        this.middlewares();
        this.routes();
    }


    //? Configuracion del perto de la app
    private config(): void {
        this._app.set('port', process.env.PORT);
    }
    //? Se encarga de verificar el token si cumple
    private middlewares() : void {
        this._app.use( express.json() );
        //? encargado de codificar la info 
        this._app.use( express. urlencoded({ extended : false }))
        this._app.use(cors);
        this._app.use(morgan);
        this._app.use('/api-docs', swaggerRouter);
    }

    private routes(): void {
    const teacherRoutes = new TeacherRoutes();
    this._app.use('/api/teachers', teacherRoutes.getRoutes());
}

    public start(): void {

    this._app.listen(config.port, () => {

        console.log(`Server corriendo por el puerto ${config.port}`);

    });
}
}

