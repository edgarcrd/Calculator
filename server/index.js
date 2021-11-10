const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, '..')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Server listening at location:${port}`)
});