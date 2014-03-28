(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aboutView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<p>";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

  buffer += "<div class=\"panel callout radius text-center\">\n  <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.paragraphs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <p>\n    <ul class=\"vcard\">\n      <li class=\"fn\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.card)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"street-address\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.card)),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.street)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"locality\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.card)),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li><span class=\"state\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.card)),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>, <span class=\"zip\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.card)),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></li>\n      <li class=\"email\"><a href=\"#\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.card)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n      <li class=\"fn\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.card)),stack1 == null || stack1 === false ? stack1 : stack1.phone)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    </ul>\n  </p>\n</div>\n";
  return buffer;
  });
templates['helpView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <span data-tooltip class=\"has-tip\" title=\"";
  if (helper = helpers.response) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.response); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><br>\n  ";
  return buffer;
  }

  buffer += "<div class=\"panel callout radius\">\n  <p>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n  <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.howTo)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n  ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.howTo)),stack1 == null || stack1 === false ? stack1 : stack1.howTos), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n\n  <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.faq)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br>\n  ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.faq)),stack1 == null || stack1 === false ? stack1 : stack1.faqs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n</div>";
  return buffer;
  });
templates['accountView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div class=\"small-2 large-4 columns\">\n    <a class=\"th [radius]\" href=\"#\">\n      <img src=\"http://graph.facebook.com/";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/picture\">\n    </a>\n  </div>\n  <div class=\"small-4 large-4 columns\">\n    ";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </div>\n</div>";
  return buffer;
  });
templates['loginView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<li><a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"button\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"small-4 large-4\"></div>\n  <div class=\"small-8 large-4 text-center\">\n    <ul class=\"button-group\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.buttons), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>\n";
  return buffer;
  });
templates['mapView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel\" style=\"height:400px\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>";
  return buffer;
  });
templates['searchView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  if (helper = helpers.mapViewTemplate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mapViewTemplate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"row\">\n  <div class=\"small-12 large-6 columns\">\n    <div class=\"panel\">\n      <div class=\"button\">select me</div>\n    </div>\n  </div>\n  <div class=\"small-12 large-6 columns\">\n    <div class=\"panel\" id=";
  if (helper = helpers.resultsID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.resultsID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\n    results will go here\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['listingViewForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel\">\n  <div class=\"row\">\n    <form class=\"small-12 large-4 columns\">\n      <fieldset>\n        <legend>Select Listing Type</legend>\n        <div class=\"row\">\n          <div class=\"large-12 columns\">\n            <label>I'm trying to:\n              <select id=\"listType\">\n                <option value=\"1\">lease a whole Appt</option>\n                <option value=\"2\">sub lease a room, for the long term (yearly)</option>\n                <option value=\"3\">sub lease a room, for the short term (a few months)</option>\n                <option value=\"51\">find a whole Appt</option>\n                <option value=\"52\">find a room in the long term (yearly)</option>\n                <option value=\"53\">find a room in the short term (a few months)</option>\n              </select>\n            </label>\n            <span data-tooltip class=\"has-tip\" title=\"A yearly commitment\">Long term?</span><br>\n            <span data-tooltip class=\"has-tip\" title=\"1 to 3 months or more\">Short term?</span><br>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n    <form class=\"small-12 large-8 columns\">\n      <fieldset>\n        <legend>Select Criteria</legend>\n        <div class=\"row\">\n          <div class=\"large-12 columns\">\n            <label>I'm trying to:\n              <select>\n                <option value=\"1\">lease a whole Appt</option>\n                <option value=\"2\">sub lease a room, for the long term (yearly)</option>\n                <option value=\"3\">sub lease a room, for the short term (a few months)</option>\n                <option value=\"51\">find a whole Appt</option>\n                <option value=\"52\">find a room in the long term (yearly)</option>\n                <option value=\"53\">find a room in the short term (a few months)</option>\n              </select>\n            </label>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n\n<script>$('#listType').on('change', function(){\n  console.log(\"CHANGED THE OPTIONS\");\n});</script>";
  });
templates['listingViewComplete'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<label>";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label><br>";
  return buffer;
  }

  buffer += "<form>\n  <fieldset>\n    <legend>";
  if (helper = helpers.lengendTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lengendTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/legend>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.criteria), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </fieldset>\n</form>";
  return buffer;
  });
templates['listingViewSmall'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "SMALL LISTING VIEW TODO";
  });
})();