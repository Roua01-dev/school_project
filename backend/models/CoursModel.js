import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";
const {DataTypes}=Sequelize;
const Cours =db.define('cours',{
uuid:{
    type: DataTypes.STRING,
    defaultValue:DataTypes.UUIDV4,
    allowNull:false,
    validate:{
        notEmpty:true
    }
},
name:{
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
        len:[3,100]
    }
},
description:{
    type: DataTypes.STRING,
},

horaire:{
    type:DataTypes.DATE,
    allowNull:false,
    validate:{
        notEmpty:true,
        isDate: true
    }
},

userId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    }
}

},{
freezeTableName:true
}
)
Users.hasMany(Cours);
Cours.belongsTo(Users, { foreignKey: 'userId' });
export default Cours ;