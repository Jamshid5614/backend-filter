const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;


require('./startup/routes')(app);
require('./startup/db');


app.listen(PORT, () => console.log('Server running'));