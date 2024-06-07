import {sequelize} from '../connection.js'
import {DataTypes} from 'sequelize'
import { postModel } from './post.model.js'
import { userModel } from './user.model.js'



export const commentModel= sequelize.define('comment',{
    content:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
})


commentModel.belongsTo(postModel,{onDelete:'CASCADE'})
postModel.hasMany(commentModel)
commentModel.belongsTo(userModel,{onDelete:'CASCADE'})
userModel.hasMany(commentModel)

