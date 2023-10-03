
const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },
        displayName: {
        allowNull: false,
        type: DataTypes.STRING,
        },
        email: {
        type: DataTypes.STRING,
        },
        password: {
        allowNull: false,
        type: DataTypes.STRING,
        },
       image: {
        type: DataTypes.STRING,
        },

    }, {
        tableName: 'users',
        timestamps: false,
        underscored: true,
    });
    
    return User;
}

module.exports = userModel;