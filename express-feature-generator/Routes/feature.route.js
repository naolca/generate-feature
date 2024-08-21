const express = require('express');
const featureController = require('../Controllers/feature.controller');

const router = express.Router();

router.post('/', featureController.create);
router.get('/', featureController.findAll);
router.get('/:id', featureController.findOne);
router.put('/:id', featureController.update);
router.delete('/:id', featureController.delete);

module.exports = router;
