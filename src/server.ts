import express from "express"; // Permite trabajar node en http para poder escuchar metodos 
import config from './config';
import { TeacherRoutes } from "./app/routes/TeacherRoutes";


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
        this._app.use( express.json );
        //? encargado de codificar la info 
        this._app.use( express. urlencoded({ extended : false }))
    }

    private routes: void {
    const teacherRoutes = new TeacherRoutes();
    this._app.use('/api/teachers', teacherRoutes.getRoutes());
}

    public start(): void {

    this._app.listen(config.port, () => {

        console.log(`Server corriendo por el puerto ${config.port}`);

    });
}
}

