import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('mini_facebook', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
});

export const connectDB = () => {sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});}
