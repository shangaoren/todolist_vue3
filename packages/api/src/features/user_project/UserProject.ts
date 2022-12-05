import { CircularHelper } from '@bubojs/sequelize'
import { DataTypes } from 'sequelize'
import { Table, Model, BelongsTo, Column, ForeignKey } from 'sequelize-typescript'

import { Project } from '../projects/Project'
import { User } from '../users/Users'

@Table({ underscored: true, tableName: 'user_project', paranoid: true, timestamps: true })
export class UserProject extends Model {
  @ForeignKey(() => User)
  declare userId: number

  @BelongsTo(() => User)
  declare user: CircularHelper<User>

  @ForeignKey(() => Project)
  declare projectId: number

  @BelongsTo(() => Project)
  declare project: CircularHelper<Project>

  @Column({ type: DataTypes.STRING })
  declare rights: 'admin' | 'user'
}
