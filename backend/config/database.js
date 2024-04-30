import { Sequelize } from "sequelize";

const db=new Sequelize('UniversityPlatform_db','root','',{
    host:"localhost",
    dialect: 'mysql'
    
})
export default db;