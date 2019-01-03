const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3003;
const bodyParser = require("body-parser");
const cors = require("cors");
const save = require("../database/main").save;
const find = require("../database/main").find;

app.use(morgan("dev"));
app.use(express.static("./client/dist"));

app.get('/find/:id', (req, res) => {
  console.log("hey I am going to find shit!", req.params.id);
  find(req.params.id, (err, stuff) => {
    if (err) {
      console.log("error!", err);
      res.send('err')
    } else {
      console.log("we did it!", stuff);
      res.send(stuff);
    }
  });
});

// app.get("/save", (req, res) => {
//   console.log("hey I am going to the homepage!");
//   save({
//     id: 1,
//     name: "this is my tester!",
//     image: "https://s3.us-east-2.amazonaws.com/recpictures/guitardood.jpg"
//   });
//   res.send("hitting the save button!");
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
