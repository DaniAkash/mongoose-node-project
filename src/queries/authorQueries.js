const Author = require("../models/author");

// const newAuthor = new Author({
//   first_name: "Albert",
//   last_name: "Einstein",
//   date_of_birth: new Date(1879, 2, 14),
//   field_of_study: "non-fiction",
//   date_of_death: new Date(1995, 3, 18)
// });

// newAuthor.save()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.error);

/**
 * Finding all documents
 */
// Author.find()
// .then(console.log)
// .catch(console.error)

/**
 * Finding a specific document
 */
// Author.findById("5e7ed383f829d2031c948f6d")
// .then(console.log)
// .catch(console.error)

/**
 * Updating the author name
 */
// Author.findByIdAndUpdate("5e7ed383f829d2031c948f6d", {
//   $set: {
//     first_name: "Stephen",
//     last_name: "Hawking"
//   }
// })
// .then(console.log)
// .catch(console.error)

/**
 * Finding by first name
 */
// Author.find({first_name: "Stephen"})
// .then(console.log)
// .catch(console.error)