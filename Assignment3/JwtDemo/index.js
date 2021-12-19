const express = require('express')
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const port = 3000

server.listen(port, () => console.log(`Example app listening on port ${port}!`))


// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/