import { SequelizeOptions, Sequelize } from 'sequelize-typescript'
import { User } from '../features/users/Users'
import { Project } from '../features/projects/Project'
import { UserProject } from '../features/user_project/UserProject'
import { Task } from '../features/tasks/Task'

const sequelizeConfig: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {}
}

export const sequelize = new Sequelize('todolist', 'todolist', 'todolist', sequelizeConfig)
sequelize.addModels([User, Project, UserProject, Task])
