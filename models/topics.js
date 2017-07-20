/*
Model Name: topics
SQL Table Name: topics
Description:
    Stores information about user topics that they want to talk about

Attributes:
-> Topic ID
-> Type

Use Cases:


*/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topics', {
    topic_type: {
      type: DataTypes.STRING
    }
  }, {
    underscored: true,
    timestamps: false
  });
};