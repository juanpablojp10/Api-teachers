import { Teacher } from './../entities/Teacher';
 
export interface ITeacherRepository{

    create(Teacher: Teacher): Promise<Teacher>
}