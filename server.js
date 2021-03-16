const express = require('express');
const mysql = require('mysql');
var exphbs = require("express-handlebars");
const connection = require('./config/connection');
const { statSync } = require('fs');

var PORT = process.env.PORT || 3001

var app = express();

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  

app.use(express.static("public"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//handlebars
// Serve index.handlebars to the root route.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//main page
app.get("/", function(req, res) {
    connection.query("SELECT * FROM topics;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { topics: data });
    });
  });

  //update topic page
  app.get('/:id', function(req, res) {
      connection.query("SELECT * FROM topics WHERE id = ?", [req.params.id], function(err, data){
      if (err) {
          return res.status(500).end();
      } 
      res.render("update", {topics:data});
    })
   
  });

  app.put("/api/:id", function(req, res) {
      connection.query('UPDATE topics SET learned = ? WHERE id = ?', [req.body.learned, req.params.id], function(err, data) {
          if (err) {
              return res.status(500).end();
          }
          console.log('it worked')
          res.status(200).end();
          //res.render("update", {topics: data});
      })
  })

  app.post("/", function(req, res) {
    connection.query('INSERT INTO topics (topic_name, topic_summary, learned) VALUES (?)', [req.body.task] , function (err, result) {
        if (err) throw err;
    })
})
  
//listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });