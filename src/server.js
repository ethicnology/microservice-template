const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");

require("dotenv").config();

const server = express();

/**
 * Morgan logging http access in a new file each day
 */
const logDirectory = "./logs";
if (fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)) {
  const utcDate = new Date().toDateString();
  const accessLogStream = rfs.createStream(`${utcDate}.log`, {
    interval: "1d",
    path: logDirectory,
  });
  server.use(morgan("combined", { stream: accessLogStream }));
}

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
require("./routes/example.route")(server);

server.listen(process.env.PORT, () =>
  console.log(`Big brother listening on port ${process.env.PORT}!`)
);
