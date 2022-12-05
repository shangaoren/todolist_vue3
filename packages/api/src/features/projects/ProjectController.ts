import { Controller } from '@bubojs/api'
import { projectRepository } from './ProjectRepository'

@Controller({ repository: projectRepository })
class ProjectController {}
