const express = require('express');
const router = express.Router();

const isLoged = (req, res, next) => {
    req.user == null
        ? res.redirect('/user/no-permission')
        : next();
}

router.get('/logged', isLoged, (req, res) => {
    console.log(req.user.picture);
    res.render('logged', {photo: req.user.photos[0].value, name:req.user.displayName});
});

router.get('/profile', isLoged, (req, res) => {
    res.render('profile');
});

router.get('/profile/settings', isLoged, (req, res) => {
    res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;