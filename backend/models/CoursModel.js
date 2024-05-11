import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";
import Matiere from "./MatiereModel.js";

const { DataTypes } = Sequelize;

const Cours = db.define(
  'cours',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100]
      }
    },
    description: {
      type: DataTypes.STRING,
    },
    horaire: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    fichier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    // Ajoutez une colonne pour l'ID de la matière associée
    matiereId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    }
  },
  {
    freezeTableName: true
  }
);
Users.hasMany(Cours);
Cours.belongsTo(Users, { foreignKey: 'userId' });

Matiere.hasMany(Cours);

Cours.belongsTo(Matiere, { foreignKey: 'matiereId' });

// (async () => {
//     try {
//       await db.sync();
//       // ALTER TABLE pour ajouter le champ "fichier"
//       await db.query('ALTER TABLE cours ADD CONSTRAINT FK_cours_matiereId FOREIGN KEY (matiereId) REFERENCES matiere(id) ON DELETE CASCADE ON UPDATE CASCADE; ;');
//       console.log('Champ matiere ajouté à la table "cours"');
//     } catch (error) {
//       console.error('Erreur lors de l\'ajout du champ "fichier" :', error);
//     }
//   })();






export default Cours ;