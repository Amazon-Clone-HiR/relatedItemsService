const mongoose = require("mongoose");

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://testing@cluster0.mongodb.net/admin";
// MongoClient.connect(uri, function (err, client) {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



mongoose.connect(
  uri
);

let recSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, unique: true },
  name: String,
  image: String
});

let Rec = mongoose.model("Recommendations", recSchema);

let save = input => {
  var newRec = new Rec(input);
  console.log("**************IS SAVE BEING HIT?**********");
  //i'll be putting the model into the new Repo.
  newRec.save(function (err) {
    if (err) {
      console.log("NOPE, NO SAVING HERE!", err);
    } else {
      console.log("I was saved to the DB!!!!!!!!!!");
    }
  });
};

let find = (id, callback) => {
  console.log('DB DB DBid->', id)
  Rec.find({ id: id }, function (err, recs) {
    if (err) {
      console.log("YOU DID NOT FIND SHIT");
      callback(null, 'errrr')
    } else {
      console.log("found the reccs");
      callback(null, recs);
    }
  });
};
// TODO: Your code here
// This function should save a repo or repos to
// the MongoDB

module.exports.save = save;
module.exports.find = find;
