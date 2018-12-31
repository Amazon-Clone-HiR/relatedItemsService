const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/myapp",
  { useNewUrlParser: true }
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
  newRec.save(function(err) {
    if (err) {
      console.log("NOPE, NO SAVING HERE!", err);
    } else {
      console.log("I was saved to the DB!!!!!!!!!!");
    }
  });
};

let find = callback => {
  Rec.find({ id: { $eq: 1 } }, function(err, recs) {
    if (err) {
      console.log("YOU DID NOT FIND SHIT");
    } else {
      console.log("FOUND  MY REPOS!!!!!!", recs);
      callback(null, recs);
    }
  });
};
// TODO: Your code here
// This function should save a repo or repos to
// the MongoDB

module.exports.save = save;
module.exports.find = find;
