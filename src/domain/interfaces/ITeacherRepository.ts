 //? Obliga que todos los repos cumplan con una firma

import { Teacher } from './../entities/Teacher';

 export interface ITeacherRepository {

    create(teacher: Teacher): Promise<Teacher>; 

    
 }