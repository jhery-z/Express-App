import {Sequelize} from "sequelize";
 
const db = new Sequelize('express_app','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;