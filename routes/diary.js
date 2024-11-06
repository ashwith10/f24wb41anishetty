var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var results = [
    { diary_name: 'Travel Diary', author: 'Alice', year: 2018 },
    { diary_name: 'Nature Observations', author: 'Bob', year: 2020 },
    { diary_name: 'Recipe Book', author: 'Carla', year: 2015 }
  ];
  
  res.render('diary', { title: 'Diaries', results: results });
});

module.exports = router;
