//? Se  encarga de la logica del app
import { Teacher } from "./../../domain/entities/Teacher";
import { ITeacherRepository } from "domain/interfaces/ITeacherRepository";
import { Request, Response, response } from "express";

export class TeacherController {

    constructor(private _teacherRepository: ITeacherRepository) {
    }

    public async create(request: Request, response: Response): Promise<Response> { //* con el async indicamos que no sabemos cuando se resuelve
        //* o sea es una promesa que no sabemos cuando se resuelve
        //* Cuando se cumple la promesa usamos el .then o el await
        //* Con el await estamos esperando hasta que resuelva, mientras permite contunuar con la ejecucion de otras tareas. (no se bloquea)
        try {
            const { name, description, email, birthDate } = request.body;
            const teacher: Teacher = new Teacher(name, description, email, new Date(birthDate));
            const createdTeacher = await this._teacherRepository.create(teacher);
            return response.status(201).json(createdTeacher); // El coidgo 201 significa que se creo con exito
        }
        catch (error) {

            console.log(error);

            return response.status(500).json({
                errorMessage: 'Tenemos un problema!',
                code: 9001
            }); //~ Jamas se pueden mostrar los errores al cliente
        }
    }


}