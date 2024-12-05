const router = require('express').Router();

router.use('/', require('./swagger').default);

router.get('/', (req, res) => {
	//#swagger.tags=['Hello World']
  res.send('Hello World') 
});

router.use('/users', require('./users').default);
router.use('/music', require('./music').default);

export default router;