/*
Model Name: users
SQL Table Name: users
Description:
    Stores information about users details

Attributes:
-> User ID
-> First Name
-> Last Name
-> Phone Number
-> Gender
-> Image URL
-> Status ID
-> Topic ID

Use Cases:


*/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.BIGINT(10)
    },
    gender: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true,
    timestamps: false
  });
};