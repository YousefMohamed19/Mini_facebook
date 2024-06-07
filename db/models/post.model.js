import { sequelize } from "../connection.js"
import { DataTypes } from "sequelize"
import { userModel } from "./user.model.js"


export const postModel = sequelize.define('post',{
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    content:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    author:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    
},
{
    paranoid:true,
    timestamps:true,
    deletedAt:'deleted',
}

)

postModel.belongsTo(userModel,{onDelete:'CASCADE'})
userModel.hasMany(postModel)
