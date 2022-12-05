import { Controller, DefaultActions } from '@bubojs/api'
import { taskRepository } from './TaskRepository'

@Controller({ repository: taskRepository })
class TaskController {
  [DefaultActions.CREATE_ONE]() {}
  [DefaultActions.GET_ONE]() {}
  [DefaultActions.DELETE_ONE]() {}
  [DefaultActions.UPDATE_ONE]() {}
}
