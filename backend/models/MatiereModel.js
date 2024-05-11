// MatiereModel.js

import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Matiere = db.define(
  'matiere',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    freezeTableName: true
  }
);

// Vous pouvez ajouter des méthodes ou des associations supplémentaires ici si nécessaire

export default Matiere;
