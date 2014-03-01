var path = require('path');
templates = require( path.join( __dirname, '../views/'));



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
