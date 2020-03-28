require("../config/mongodb");

const Author = require("../models/author");
const Book = require("../models/book");

const newAuthor = new Author({
  first_name: "Albert",
  last_name: "Einstein",
  date_of_birth: new Date(1879, 2, 14),
  field_of_study: "non-fiction",
  date_of_death: new Date(1995, 3, 18)
});

// 5e7ed38f2ea8f8033c488d41,

const newBook = new Book({
  title: "The world as I see it",
  author: "5e7ed38f2ea8f8033c488d41",
  summary: "Albert Einstein believes in humanity, in a peaceful world of mutual helpfulness, and in the high mission of science. This book is intended as a plea for this belief at a time which compels every one of us to overhaul his mental attitude and his ideas.",
  isbn: "978-0806527901"
});

newBook.save()
  .then(response => {
    console.log(response);
  })
  .catch(console.error)

// newAuthor.save()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.error);