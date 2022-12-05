import { SequelizeBaseRepository } from '@bubojs/sequelize'
import { Task } from './Task'

class TaskRepository extends SequelizeBaseRepository<Task> {
  constructor() {
    super(Task)
  }
}

export const taskRepository = new TaskRepository()
