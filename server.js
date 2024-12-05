import express from 'express';
import { json } from 'body-parser';
import mongodb from './data/database';
const app = express();

const port = process.env.PORT || 3000;

app.use(json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});
app.use('/', require('./routes').default);

mongodb.initDb((err) => {
	if(err) {
		console.log(err);
	}
	else {
		app.listen(port, () => {console.log(`Database is listening and node is running on port ${port}`)});
	}
});