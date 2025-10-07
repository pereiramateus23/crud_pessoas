import { DataTypes, Model } from "sequelize"; 
import { sequelize } from "../config/database";

export class Pessoa extends Model {
  public id!: number;
  public nome!: string;
  public cpf!: string;
  public data_nascimento!: Date;
}

Pessoa.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Pessoa",
    tableName: "pessoas",
    timestamps: false,
  }
);
