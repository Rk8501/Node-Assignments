const express = require("express");
const fileRouter = require("./routes/files");
const app = express();

app.set("view engine", "ejs");
app.use("/", fileRouter);
app.listen(5000, function () {
  console.log(`Server is running on port 5000`);
});
