const { DataTypes } = require("sequelize");

module.exports = ( sequilize ) =>{
    sequilize.define("Favorite", {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,            
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        especies:{
            type: DataTypes.STRING,
            allowNull: false  },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
         },
         origin: {
            type: DataTypes.STRING,
            allowNull: false
         },
         image: {
            type: DataTypes.STRING,
            allowNull: false
         }
    },{timestamps:false});
};