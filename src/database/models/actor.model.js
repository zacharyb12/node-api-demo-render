import { DataTypes,Sequelize } from "sequelize";

export default (sequelize) => {

    const Actor = sequelize.define("Actor" , {
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Actor;
}