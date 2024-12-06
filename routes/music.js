const express = require('express');

const musicController = require('../controllers/music');

const router = express.Router();

router.get('/', musicController.getAllMusic);

router.get('/:id', musicController.getSingleMusic);

router.post('/', musicController.createMusic);

router.put('/:id', musicController.updateMusic);

router.delete('/:id', musicController.deleteMusic);

module.exports = router;