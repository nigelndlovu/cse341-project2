const swaggerAutogen = require('swagger-autogen')();

const doc = {
	info: {
		title: 'MusicInfo Api',
    description: 'MusicInfo Api'
  },
  host: 'localhost:3001',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);