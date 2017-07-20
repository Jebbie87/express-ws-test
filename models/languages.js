/*
Model Name: languages
SQL Table Name: languages
Description:
    Stores information about the languages that they want to talk in

Attributes:
-> Languages ID
-> Language
-> User ID

Use Cases:


*/

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('languages', {
        topic_type: {
            type: DataTypes.STRING
        }
    }, {
        underscored: true,
        timestamps: false
    });
};