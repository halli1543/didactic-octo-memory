const express = require('express');
const router = express.Router();
const websiteController = require('../controllers/website.controllers');

router.get('/', websiteController.GetHomePage);
router.get('/menu', websiteController.GetMenu);

module.exports = router;