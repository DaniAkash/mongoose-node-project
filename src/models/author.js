const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  field_of_study: {
    type: String,
    enum: ["fiction", "non-fiction"]
  },
  date_of_birth: Date,
  date_of_death: Date,
});

const Author = model("Author", AuthorSchema);

module.exports = Author;