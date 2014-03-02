var path = require('path');
templates = require( path.join( __dirname, '../views/'));

var mongoose = require('mongoose');
var mongolab = require('./.mongolab.json');
mongoose.connect('mongodb://' + mongolab.username + ':' + mongolab.pass + '@ds037737.mongolab.com:37737/listings');

/*
 * GET index page.
 */
exports.index = function(req, res){
  res.render('./layouts/main', {
    title: templates.title(), 
    headStub: templates.headStub(),
    headBar: templates.headBar(),
    footBar: templates.footBar(),
    includeStub: templates.includeStub(),
    body: templates._indexBODY(),
  });
};

/*
 * GET about page.
 */
exports.about = function(req, res){
  res.render('./layouts/main', {
    title: templates.title(),
    headStub: templates.headStub,
    headBar: templates.headBar,
    footBar: templates.footBar,
    includeStub: templates.includeStub(),
    body: templates._aboutBODY(),
  });
};

/*
 * GET map page.
 */
exports.map = function(req, res){
  res.render('./layouts/main', {
    title: templates.title(),
    headStub: templates.headStub,
    headBar: templates.headBar,
    footBar: templates.footBar,
    includeStub: templates.includeStub(),
    body: templates._mapBODY(),
  });
};

/*
 * GET pointer data from the map.
 */
exports.mapGetId = function(req, res){
  var id = req.params.id;
  console.log( id);
  var apptData = {
    name: "JEFFREY"
  }
  //do some database call here
  res.json( apptData);
/*res.render('./layouts/main', {
    title: templates.title(),
    headStub: templates.headStub,
    headBar: templates.headBar,
    footBar: templates.footBar,
    includeStub: templates.includeStub(),
    body: templates._mapBODY(),
  });
*/
};





