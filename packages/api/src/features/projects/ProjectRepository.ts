import { SequelizeBaseRepository } from '@bubojs/sequelize'
import { Project } from './Project'

class ProjectRepository extends SequelizeBaseRepository<Project> {
  constructor() {
    super(Project)
  }
}

export const projectRepository = new ProjectRepository()
