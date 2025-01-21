const express = require('express');
var fileupload = require("express-fileupload");
const bodyParser = require('body-parser');
var cors = require("cors");

require('dotenv').config();

const http = require('node:http');

const cluster = require('cluster');

// Check the number of available CPU.
const numCPUs = require('os').cpus().length;

http.globalAgent.maxSockets = 20;


const app = express();

app.disable('x-powered-by');


const path = __dirname + '/client/build/';

app.use(express.static(path));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var corsOptions = {
  AccessControlAllowOrigin: '*',
  origin: "http://localhost",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
};

app.use(cors(corsOptions));

const port = process.env.PORT || 1234;


// For Master process
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // This event is first when worker died
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}

// For Worker
else {

  app.use(express.raw({ inflate:true,limit:'50mb',type: () => true}));

  app.use("/api", require("./routes/routes"));

  
  app.get('/admin', function (req,res) {
    res.sendFile(path + "index.html");
  });

  app.use((req, res) => {
    res.status(400).send({ 'response': 'not allowed' });
  })

  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });

}