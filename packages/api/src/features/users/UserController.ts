import { Controller, DefaultActions } from '@bubojs/api'
import { userRepository } from './UserRepository'

@Controller({ repository: userRepository })
class UserController {
  [DefaultActions.CREATE_ONE]() {}
  [DefaultActions.GET_ONE]() {}
  [DefaultActions.DELETE_ONE]() {}
  [DefaultActions.UPDATE_ONE]() {}
}
