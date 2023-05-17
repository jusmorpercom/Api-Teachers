//TODO  Se encarga de llamar al controlador y le idica en donde esta la ruta 

import { TeacherController } from "./../../app/controllers/TeacherController";
import { TeacherRepository } from "./../../infra/repositories/TeacherRepository";
import { Router } from "express";

 export class TeacherRoutes {

    private _router: Router;
    private _teacherRepository: TeacherRepository;
    private _teacherController: TeacherController

    constructor(){
        this._router = Router();
        this._teacherRepository = new TeacherRepository();
        this._teacherController = new TeacherController( this._teacherRepository );
        this.initRoutes();
    }

    private initRoutes(): void {

        this._router.post('/create', this._teacherController.create.bind(this._teacherController) ); //? el bind permite accedar a las propiedadses que tiene la funcion 
        
    }

    public getRoutes(): Router{ 
        return this._router; 
    }
}