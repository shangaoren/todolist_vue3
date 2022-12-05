import { SequelizeBaseRepository } from '@bubojs/sequelize'
import { User } from './Users'

class UserRepository extends SequelizeBaseRepository<User> {
  constructor() {
    super(User)
  }
}

export const userRepository = new UserRepository()
