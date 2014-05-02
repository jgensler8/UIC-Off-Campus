UIC-Off-Campus
==============

New UIC off campus housing website. [Can be viewed here](http://jgensl2.people.uic.edu/housing/)

#How to run#
Create back end deps (assuming you have npm):
```
$ npm install
```

Create front end deps (bower must be installed globally)
```
$ bower install
```

Precompile the templates (handlebars 1.3 must be installed globally)
```
$ . build_templates.sh
```

Add a 'facebook_options.json' file in the root directory. You will need 
```
{
  "appId": "ID_GOES_HERE",
  "appSecret": "SECRET_GOES_HERE"
}
```

Add a 'mongolab_options.json' file in the root directory. You will need 
```
{
  "username": "NAME_GOES_HERE",
  "userpass": "PASS_GOES_HERE"
}
```

Start the server:
```
$ node server.js [--port=[CHOOSE A PORT]]
```

##Back end built with the help of:##
*   Node.js
*   hbs
*   Express
*   Optimist
*   passport, passport-facebook, passport-local
*   geocoder

##Front end build with the help of:##
*   Bower
*   Backbone
*   Foundation
*   Handlebars
*   Google Maps API
*   Facebook Graph API

##In the works:##
*   UIC bluestem, authentication for uic students

