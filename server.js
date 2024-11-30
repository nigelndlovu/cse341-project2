const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => {console.log(`Database is listening and node is running on port ${port}`)});