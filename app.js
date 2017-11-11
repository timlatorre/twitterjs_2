const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/routes.js');

app.listen(port, function(){
  console.log(`listening on port ${port}`);
})

app.use('/', routes);

