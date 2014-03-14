

function htmlLoader( fileName){
  var fs = require('fs');
  var filepath = __dirname + '/' + fileName + '.html';
  console.log( filepath);
  return fs.readFileSync( filepath);
};

/*
 * GENERIC HTML
 */
var generic = {};

exports.title = function(){
  return "UIC OFF CAMPUS";
}

generic.headStub = htmlLoader('headStub');
exports.headStub = function(){
  return generic.headStub;
};

generic.headBar = htmlLoader('headBar');
exports.headBar = function(){
  return generic.headBar;
};

generic.footBar = htmlLoader('footBar');
exports.footBar = function(){
  return generic.footBar;
};

generic.includeStub = htmlLoader('includeStub');
exports.includeStub = function(){
  return generic.includeStub;
};

/*
 * VIEW SPECIFIC
 */

var specific = {};

specific._indexBODY = htmlLoader('_indexBODY');
exports._indexBODY = function(){
  return specific._indexBODY;
};

specific._aboutBODY = htmlLoader('_aboutBODY');
exports._aboutBODY = function(){
  return specific._aboutBODY;
};

specific._mapBODY = htmlLoader('_mapBODY');
exports._mapBODY = function(){
  return specific._mapBODY;
};
