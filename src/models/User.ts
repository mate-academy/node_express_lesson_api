import {
  AllowNull,
  AutoIncrement, BelongsTo,
  Column, ForeignKey,
  Model, PrimaryKey,
  Table
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Color } from './Color';
import { Col } from 'sequelize/types/utils';

@Table({
  tableName: 'users',
  createdAt: false,
  updatedAt: false,
})

export class User extends Model {
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

  @AllowNull(false)
  @ForeignKey(() => Color)
  @Column({
    type: DataTypes.INTEGER,
    field: 'car_color_id',
  })
  carColorId: number;

  @BelongsTo(() => Color)
  color: Color | null;
}
