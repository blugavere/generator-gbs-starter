
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const chalk = require('chalk');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const server = require('http').Server;

const app = express();
const http = server(app);

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

app.set('env', env);
app.set('port', port);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(helmet()); // http security middleware

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// require('./routes')(app);

app.use(serveStatic(path.join(__dirname, '../client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

http.listen(port, () => {
  console.log(chalk.green(`listening on *:${port}`));
});

module.exports = app;
