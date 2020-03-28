const Book = require("../models/book");

// const newBook = new Book({
//   title: "The world as I see it",
//   author: "5e7ed38f2ea8f8033c488d41",
//   summary: "Albert Einstein believes in humanity, in a peaceful world of mutual helpfulness, and in the high mission of science. This book is intended as a plea for this belief at a time which compels every one of us to overhaul his mental attitude and his ideas.",
//   isbn: "978-0806527901"
// });

// newBook.save()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.error)

/**
 * Find a book
 */
Book
  .findById("5e7ed45f24fb8604741c5f85")
  .populate("author", "first_name last_name")
  .then(console.log)
  .catch(console.error)