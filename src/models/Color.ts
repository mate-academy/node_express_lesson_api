import {
  AllowNull,
  AutoIncrement,
  Column, HasMany,
  Model, PrimaryKey,
  Table
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'colors',
  createdAt: false,
  updatedAt: false,
})

export class Color extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  name: string;
}
