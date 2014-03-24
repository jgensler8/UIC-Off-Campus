UIC-Off-Campus
==============

New UIC off campus housing website.

#How to run#
create back end deps (assuming you have npm):
```
$ npm install
```

create front end deps (bower must be installed globally)
```
$ bower install
```

precompile the templates (handlebars 1.3 must be installed globally)
```
$ . build_templates.sh
```

start the server:
```
$ node server.js
```

##Back end built with the help of:##
*   Node.js
*   hbs
*   Express
*   Mongoose

##Front end build with the help of:##
*   Bower
*   Backbone
*   Foundation
*   Handlebars
*   Google Maps API

##In the works:##
*   Optimist, internal parameter passing used by UIC internal hosting manager
*   Passport, authentication for non-uic people
*   UIC bluestem, authentication for uic students

