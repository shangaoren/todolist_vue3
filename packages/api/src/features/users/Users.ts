import { CircularHelper } from '@bubojs/sequelize'
import { Column, HasMany, Table, Model } from 'sequelize-typescript'
import { UserProject } from '../user_project/UserProject'

@Table({ underscored: true, tableName: 'user', paranoid: true, timestamps: true })
export class User extends Model {
  @Column
  declare email: string

  @Column
  declare password: string

  @HasMany(() => UserProject)
  declare userProject: CircularHelper<UserProject>
}
