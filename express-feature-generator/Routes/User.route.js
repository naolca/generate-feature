const express = require('express');
const UserController = require('../Controllers/User.controller');

const router = express.Router();

router.post('/', UserController.create);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;
