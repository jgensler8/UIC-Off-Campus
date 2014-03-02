var express = require('express'),
    exphbs  = require('express3-handlebars'),
    app = express(),
    routes = require('./routes'),
    path = require('path');

app.engine('handlebars', exphbs() );
app.set('view engine', 'handlebars');

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/map', routes.map);
app.get('/map/:id', routes.mapGetId);
//app.get('/help', routes.help);
app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000);
