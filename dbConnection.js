const {Sequelize} = require('sequelize')

//LOCAL CONNECTION
 /*const sequelize = new Sequelize('conduit','root','root',{
    dialect: 'mysql',
    host:'mysql',
    logging: false
}); 
*/

//AMAZON RDS CONNECTION
 const sequelize = new Sequelize('conduit','root','root_password',{
    dialect: 'mysql',
    host:'terraform-20210604230056912900000001.cal5fr0wl0m2.eu-central-1.rds.amazonaws.com',
    logging: false,
    port: 3306
});
 /*
const sequelize = new Sequelize('d6rk5ijgmvcf6q',process.env.USER_NAME,process.env.PASSWORD,{
    dialect: 'postgres',
    host: process.env.DB_HOST,
    logging: false,
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
});
*/
const checkConnection =async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection()

module.exports = sequelize