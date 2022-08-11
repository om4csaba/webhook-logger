const bodyParser = require('body-parser');
const color = require('ansi-colors');
const express = require('express');

const app = express();
app.use(bodyParser.json());

app.all('/', function (req, res) {
  console.log(color.inverse('> Date: ' + new Date().toLocaleString()));
  console.log(color.yellow('> Request:'), req.method, req.originalUrl);
  console.log(color.blue('> Header:'), req.headers);
  console.log(color.cyan('> Body:'), req.body);
  console.log();
  res.json({
    'original headers': req.headers,
    'original body': req.body
  });
});

app
  .listen(8080, function () {
    console.log(color.gray('listening on port 8080'));
  })
  .on('error', function (err) {
    console.log(color.red('Failed to start server'));
    console.log(err.stack);
  });
