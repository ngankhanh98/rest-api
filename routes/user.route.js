const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router()

router.route('/:userId')
  .get(userController.getProfile)

module.exports = router