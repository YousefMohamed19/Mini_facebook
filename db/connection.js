import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('mysql://utxhxqh5i8euypzy:MpmIFKWZD02M5A6rQwYm@bmiuheoqo0rvs2qglxsy-mysql.services.clever-cloud.com:3306/bmiuheoqo0rvs2qglxsy');

export const connectDB = () => {sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});}
