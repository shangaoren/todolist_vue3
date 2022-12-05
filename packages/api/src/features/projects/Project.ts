import { Model, Table, BelongsTo, HasMany, Column } from 'sequelize-typescript'
import { CircularHelper } from '@bubojs/sequelize'

import { Task } from '../tasks/Task'
import { DataTypes } from 'sequelize'

@Table({ underscored: true, tableName: 'project', paranoid: true, timestamps: true })
export class Project extends Model {
  @Column
  declare name: string
  @Column({ type: DataTypes.TEXT })
  declare description: string
  @Column
  declare dueDate: Date

  @HasMany(() => Task)
  declare tasks: Array<CircularHelper<Task>>
}
