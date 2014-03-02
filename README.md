UIC-Off-Campus
==============

New UIC off campus housing website.

#How to run#
create a mongoDB and edit routes/index.js. Edit lines accordingly:
  ```
var mongoose = require('mongoose');
var mongolab = require('./.mongolab.json');
mongoose.connect('mongodb://' + mongolab.username + ':' + mongolab.pass + '@ds037737.mongolab.com:37737/listings'); 
  ```
then run,
  ```
  node app.js
  ```

##Code built with the help of##
*   Node.js, backend framework
*   Foundation, boilerplate CSS + Widgets
*   Express.js, middleware
*   express3-handlebars.js, templating
*   Mongoose, connect to MonogoLab Database
*   Google Maps API, the maps

##In the works:##
*   Optimist, internal parameter passing used by UIC internal hosting manager
*   Passport, authentication for non-uic people
*   UIC bluestem, authentication for uic students
*   underscore.js, might use for minor aggregation
