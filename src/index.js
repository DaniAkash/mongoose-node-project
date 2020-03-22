var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

require("./queries/authorQueries");

/**
 * Book
 */
/*
_id,
title,
author, -> reference
summary,
isbn
*/

/**
 * Author
 */
/*
_id,
first_name,
last_name,
date_of_birth,
field_of_study,
date_of_death
*/