const express = require('express');

const bodyParser = require('body-parser');

require('dotenv').config();

const http = require('node:http');



const system = require('./config/systemConfig');

// Check the number of available CPU.
const numCPUs = require('os').cpus().length;

http.globalAgent.maxSockets = 20;





const app = express();

const ngrok = require('ngrok');

app.disable('x-powered-by')



const port = process.env.PORT || 1234;




(async function() {
  console.log("Initializing Ngrok tunnel...");

  // Initialize ngrok using auth token and hostname
  const url = await ngrok.connect({
      proto: "http",
      // Your authtoken if you want your hostname to be the same everytime
      authtoken: system.ngrok.authtoken,
      // Your hostname if you want your hostname to be the same everytime
      hostname: system.ngrok.hostname,
      // Your app port
      addr: port,
  });

  console.log(`Listening on url ${url}`);
  console.log("Ngrok tunnel initialized!");
})();

//app.use(express.raw({type: "application/json"}));

app.use("/api", require("./routes/routes"));

app.use((req, res) => {
  res.status(400).send({ 'response': 'end' });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

