'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const db        = {};
let sequelize;

if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        'dialect': 'postgres',
    });
} else {
    sequelize = new Sequelize(undefined, undefined, undefined, {
        'dialect': 'sqlite',
        'storage': __dirname + '/data/volto-dev-database.sqlite'
    });
}

fs
  .readdirSync(__dirname + '/models/')
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    const model = sequelize.import(__dirname + '/models/' + file);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ASSOCIATIONS

// Users & Status
db.statuses.belongsTo(db.users);
db.users.hasOne(db.statuses);

// Users & Topics
db.topics.belongsTo(db.users);
db.users.hasOne(db.topics);

// Users & Languages
db.languages.belongsTo(db.users);
db.users.hasMany(db.users);

module.exports = db;


