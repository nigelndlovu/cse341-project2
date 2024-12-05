const express = require('express');
const router = express.Router();

const musicController = require('../controllers/music');

router.get('/', musicController.getAllMusic);

router.get('/:id', musicController.getSingleMusic);

router.post('/', musicController.createMusic);

router.put('/:id', musicController.updateMusic);

router.delete('/:id', musicController.deleteMusic);

module.exports = router;