import { CircularHelper } from '@bubojs/sequelize'
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Project } from '../projects/Project'

@Table({ underscored: true, timestamps: true, paranoid: true, tableName: 'task' })
export class Task extends Model {
  @Column
  declare name: string

  @Column({ type: DataType.TEXT })
  declare description: string

  @Column
  declare dueDate: Date

  @ForeignKey(() => Project)
  declare ProjectId?: number

  @BelongsTo(() => Project)
  declare project: CircularHelper<Project>
}
