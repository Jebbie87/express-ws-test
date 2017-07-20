const express = require('express');
const router = express.Router();
const models = require('../db.js');
// const middleware = require('../middleware.js')(models);

// Route Files
const user = require('./user');
const language = require('./language');
const status = require('./status');
const topic = require('./topic');


router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Auth");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

// Views
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Lunch Society'
    });
});

// Users
// router.get('/api/v1/users', user.list);
router.get('/api/v1/users/:id', user.view);
router.post('/api/v1/user', user.create);
router.post('/api/v1/users/login', user.login);
router.put('/api/v1/user/:id', user.update);
//router.delete('/api/v1/user/:id', user.delete);

module.exports = router;
