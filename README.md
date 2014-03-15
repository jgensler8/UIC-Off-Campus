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

##Back end built with the help of:##
*   Node.js
*   Restify
*   Mongoose

##Front end build with the help of:##
*   Bower
*   Backbone
*   Require.js
*   Foundation
*   Google Maps API

##In the works:##
*   Optimist, internal parameter passing used by UIC internal hosting manager
*   Passport, authentication for non-uic people
*   UIC bluestem, authentication for uic students

