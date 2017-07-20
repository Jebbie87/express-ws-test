/*
Model Name: status
SQL Table Name: status
Description:
    Stores information about user status that they want to talk about

Attributes:
-> Status ID
-> Type

Use Cases:


*/

module.exports = function(sequelize, DataTypes) {

    const statuses = sequelize.define('statuses', {
        status_type: {
            type: DataTypes.STRING
        }
    }, {
        underscored: true,
        timestamps: false
    });

    return statuses;
};