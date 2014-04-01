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


  buffer += "\n<div class=\"row panel\">\n  <div class=\"small-6 medium-6 large-8 columns\">\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <label>";
  if (helper = helpers.priceLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.priceLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceFrom)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceFrom)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceTo)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceTo)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n      </label>\n\n      <label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bedrooms)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bedrooms)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bedrooms)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n      </label>\n    </div>\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <label>";
  if (helper = helpers.bathroomsLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bathroomsLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.fullBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.fullBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.halfBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.halfBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n      </label>\n    </div>\n  </div>\n  <div class=\"small-6 medium-6 large-4 columns\">\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <label>Allowed<br>\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.catAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.catAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.catAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label><br>\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.dogAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.dogAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.dogAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label><br>\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.smokingAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.smokingAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.smokingAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n      </label>\n    </div>\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <label>Included<br>\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label><br>\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.heatInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.heatInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.heatInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label><br>\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waterInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waterInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waterInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label><br>\n        <input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.electricInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.electricInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.electricInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n      </label>\n    </div>\n  </div>\n</div>\n\n\n";
  if (helper = helpers.mapViewTemplate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mapViewTemplate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"row\" id=";
  if (helper = helpers.searchResultsID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchResultsID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\n</div>";
  return buffer;
  });
templates['listingViewForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"reveal-modal\" data-reveal>\n  <p class=\"lead\">Sorry, we've got an error on our hands</p>\n  <p>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n<script>$('#";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'').data('reveal-init', {\n    animation: 'fadeAndPop',\n    animation_speed: 250,\n    close_on_background_click: false,\n    close_on_esc: false,\n    dismiss_modal_class: 'close-reveal-modal',\n    bg_class: 'reveal-modal-bg',\n    bg : $('.reveal-modal-bg'),\n    css : {\n        open : {\n            'opacity': 0,\n            'visibility': 'visible',\n            'display' : 'block'\n        },\n        close : {\n            'opacity': 1,\n            'visibility': 'hidden',\n            'display': 'none'\n        }\n    }\n})</script>\n";
  return buffer;
  }

  buffer += "<div class=\"panel\">\n  <div class=\"row\">\n    <form id=\"listingForm\" class=\"small-12 large-4 columns\">\n      <fieldset>\n        <div class=\"row\">\n          <div class=\"small-12 large-12 columns\">\n            <label>I'm trying to:\n              <select name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.listingType)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                <option value=\"1\">lease a whole apartment</option>\n                <option value=\"2\">sub lease a room, for the long term</option>\n                <option value=\"3\">sub lease a room, for the short term </option>\n                <option value=\"51\">find a whole apartment</option>\n                <option value=\"52\">find a room for the long term</option>\n                <option value=\"53\">find a room for the short term</option>\n              </select>\n            </label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"small-6 large-6 columns\">\n            <span data-tooltip class=\"has-tip\" title=\"a yearly commitment\">Long term?</span>\n          </div>\n          <div class=\"small-6 large-6 columns\">\n            <span data-tooltip class=\"has-tip\" title=\"1 to 3 months or more\">Short term?</span>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n    <form id=\"criteriaForm\" class=\"small-12 large-8 columns\">\n      <fieldset>\n        <div class=\"row\">\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>Date available from<small> required</small>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.availableFromDate)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"date\" required>\n            </label>\n          </div>\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>Date available to<small> required</small>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.availableToDate)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"date\" required>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>Number and Street Name<small> required</small>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addrLine)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"text\" placeholder=\"123 S. Halsted St\" required>\n            </label>\n            <label>Apartment Number<br>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addrAptNum)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"text\" placeholder=\"Apt Num\">\n            </label>\n          </div>\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>City, State, ZIP<small> required</small>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addrCity)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"text\" placeholder=\"City\" required>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addrState)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"text\" placeholder=\"State\" required>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addrZip)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\"ZIP\" required>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Maximum Price<small> required</small>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.price)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" required>\n            </label>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Bedrooms<small> required</small>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bedrooms)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" required>\n            </label>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Bathrooms<small> required</small>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.fullBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\"full\" required>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.halfBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\"half\" required>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Utilities Included<br>\n              <p>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.heatInc)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Heat</label><br>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waterInc)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Water</label><br>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Garbage</label><br>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.electricInc)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Electricity</label><br>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.internetInc)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Internet</label>\n              </p>\n            </label>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Square Feet Of Apartment<br>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.squareFeet)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" pattern=\"number\"><br>\n            </label>\n            <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.smokingAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Smoking Allowed</label><br>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Pets Allowed<br>\n              <p>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.dogAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Dogs Allowed</label><br>\n              <input name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.catAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\"><label>Cats Allowed</label>\n              </p>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-12 large-12 columns\">\n            <input class=\"button left\" type=\"submit\" name=\"submit\"/>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.errorSubmitMessages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates['listingViewComplete'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<li class=\"bullet-item\">Squarefeet: ";
  if (helper = helpers.sqaureFeet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sqaureFeet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "<li class=\"price\">Heat Included</li>";
  }

function program5(depth0,data) {
  
  
  return "<li class=\"price\">Garbage Incded</li>";
  }

  buffer += "<div class=\"row\">\n  <div class=\"small-12 medium-12 large-12 columns\">\n    <ul class=\"pricing-table\">\n      <li class=\"title\">At a Glance</li>\n      <li class=\"price\">$";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n      <li class=\"bullet-item\">Bedrooms: ";
  if (helper = helpers.bedrooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bedrooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n      <li class=\"bullet-item\">Bathrooms: ";
  if (helper = helpers.fullBathrooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fullBathrooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " full and ";
  if (helper = helpers.halfBathrooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.halfBathrooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " half</li>\n      <li class=\"cta-button\"><a class=\"button\" href=\"#\">Contact ";
  if (helper = helpers.postedBy) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.postedBy); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <a class=\"button\" href=\"#\">SocialScore</a></li>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sqaureFeet), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.heatInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.heatInc), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n\n<!---\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <div class=\"row\">\n      <fieldset>\n        ";
  if (helper = helpers.availableFromDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableFromDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        ";
  if (helper = helpers.availableToDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableToDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </fieldset>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"small-12 medium-12 large-12 columns text-centered\">\n        <ul class=\"vcard text-centered\">\n          <li class=\"street-address\">";
  if (helper = helpers.addrLine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrLine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n          <li class=\"locality\">";
  if (helper = helpers.addrCity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrCity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n          <li><span class=\"state\">";
  if (helper = helpers.addrState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>, <span class=\"zip\">";
  if (helper = helpers.addrZip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrZip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  ---->\n</div>";
  return buffer;
  });
templates['listingViewSmall'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "SMALL LISTING VIEW TODO";
  });
})();