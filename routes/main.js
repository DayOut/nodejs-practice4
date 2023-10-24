const express = require('express');
const router = express.Router();

const userList = [];

router.get('/users', (req, res, next) => {
    res.render("users", { currentPath: "/users", users: userList});
});

router.post("/add-user", (req, res, next) => {
    console.log('Received user name:', req.body.username);
    userList.push(req.body.username);
    console.log('Current user list: ', userList);
    res.redirect('/');
});

router.get('/', (req, res, next) => {
    res.render('index', {currentPath: '/'});
});

module.exports = router;