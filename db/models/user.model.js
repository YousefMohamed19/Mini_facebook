import {sequelize} from '../connection.js'
import {DataTypes} from 'sequelize'


export const userModel= sequelize.define('user',{
    username:{
        type:DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull: false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
    }
})

