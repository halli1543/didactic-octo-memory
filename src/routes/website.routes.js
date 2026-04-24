const express = require('express');
const router = express.Router();
const websiteController = require('../controllers/website.controllers');

router.get('/', startrekController.GetHomePage);
router.get('/shows', startrekController.getMenu);

module.exports =router;