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
  buffer += "\n      <span data-tooltip class=\"has-tip row\" title=\"";
  if (helper = helpers.response) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.response); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span><br>\n      ";
  return buffer;
  }

  buffer += "<div class=\"panel callout radius\">\n  <div class=\"row text-center\"><h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4></div>\n\n  <div class=\"row text-center\">\n    <div class=\"small-12 medium-6 large-6 columns\">\n      "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.howTo)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.howTo)),stack1 == null || stack1 === false ? stack1 : stack1.howTos), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"small-12 medium-6 large-6 columns\">\n      "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.faq)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.faq)),stack1 == null || stack1 === false ? stack1 : stack1.faqs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['accountView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"row panel\">\n        <div class=\"small-12 large-12 columns\">\n\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <h4>";
  if (helper = helpers.addrLine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrLine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.addrAptNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrAptNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.addrCity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrCity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.addrState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.addrZip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrZip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n          </div>\n\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <ul class=\"button-group\">\n              <li><a class=\"button\" type=\"editReveal\" id=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Edit</a></li>\n              <li><a class=\"button\" type=\"deleteReveal\" id=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Delete</a></li>\n            </ul>\n          </div>\n\n        </div>\n    </div>\n\n    <div id=\"edit";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"reveal-modal\" data-reveal>\n      <div id=\"template";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n      <a class=\"button\" type=\"editSubmit\" id=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Submit</a> <a class=\"button\">Cancel</a>\n      <a class=\"close-reveal-modal\">&#215;</a>\n    </div>\n\n    <div id=\"delete";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"reveal-modal\" data-reveal>\n      <p class=\"lead\">Are you sure you want to delete?</p>\n      <a class=\"button\" type=\"deleteSubmit\" id=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Delete</a> <a class=\"button\">Cancel</a>\n      <a class=\"close-reveal-modal\">&#215;</a>\n    </div>\n\n    ";
  return buffer;
  }

  buffer += "<div class=\"row panel\">\n  <div class=\"small-6 large-6 columns\">\n    <a class=\"th [radius]\" href=\"#\">\n      <img src=\"http://graph.facebook.com/";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/picture\">\n    </a>\n  </div>\n  <div class=\"small-6 large-6 columns\">\n    <h3>";
  if (helper = helpers.displayName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <fieldset>\n    <legend>Your Listings</legend>\n\n\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.listings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n  </fieldset>\n</div>\n";
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


  buffer += "<div class=\"row\">\n  <div class=\"panel\">\n    <ul class=\"small-block-grid-1 medium-block-grid-3 large-block-grid-3 text-center\">\n      <li>Full Apartment, To Rent: <img src=\"public/markers/red_MarkerA.png\"></li>\n      <li>Room, Short Term, To Rent: <img src=\"public/markers/red_MarkerS.png\"></li>\n      <li>Room, Long Term, To Rent: <img src=\"public/markers/red_MarkerL.png\"></li>\n    </ul>\n    <ul class=\"small-block-grid-1 medium-block-grid-3 large-block-grid-3 text-center\">\n      <li>Full Apartment, Wanted: <img src=\"public/markers/blue_MarkerA.png\"></li>\n      <li>Room, Short Term, Wanted: <img src=\"public/markers/blue_MarkerS.png\"></li>\n      <li>Room, Long Term, Wanted: <img src=\"public/markers/blue_MarkerL.png\"></li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"off-canvas-wrap\" data-offcanvas>\n  <div class=\"inner-wrap\">\n    <nav class=\"tab-bar\">\n      <section class=\"left-small\">\n        <a class=\"left-off-canvas-toggle menu-icon\" ><span></span></a>\n      </section>\n\n      <section class=\"middle tab-bar-section\">\n        <a class=\"title button\" id=\"searchButton\">Search</a>\n      </section>\n\n      <section class=\"right-small\">\n        <a class=\"right-off-canvas-toggle menu-icon\" ><span></span></a>\n      </section>\n    </nav>\n\n    <aside class=\"left-off-canvas-menu\">\n      <ul class=\"off-canvas-list\">\n        <li><label>";
  if (helper = helpers.priceLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.priceLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label></li>\n        <li><input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceFrom)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceFrom)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></li>\n        <li><input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceTo)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.priceTo)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></li>\n\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bedrooms)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label></li>\n        <li><input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bedrooms)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.bedrooms)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></li>\n\n        <li><label>";
  if (helper = helpers.bathroomsLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bathroomsLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label></li>\n        <li><input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.fullBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.fullBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></li>\n        <li><input id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.halfBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"number\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.halfBathrooms)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></li>\n\n        <li><label>Included</label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.heatInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.heatInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waterInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waterInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.electricInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.electricInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.garbageInc)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n        \n        <li><label>Allowed</label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.catAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.catAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.dogAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.dofAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n        <li><label>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.smokingAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.smokingAllowed)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></input></label></li>\n      </ul>\n    </aside>\n\n    <aside class=\"right-off-canvas-menu\">\n      <ul class=\"off-canvas-list\">\n        <li><label>Listing Types</label></li>\n        <li><a href=\"#search\" id=\"showAsMap\">Map</a></li>\n        <li><a href=\"#search\" id=\"showAptList\">Apt. List</a></li>\n        <li><a href=\"#search\" id=\"showSocialList\">Social List</a></li>\n      </ul>\n    </aside>\n\n    <section class=\"main-section\" id=\"main-section\" style=\"height:400px\">\n      ";
  if (helper = helpers.mapViewTemplate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mapViewTemplate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </section>\n\n  <a class=\"exit-off-canvas\"></a>\n\n  </div>\n</div>\n\n<div id=\"mapListingModal\" class=\"reveal-modal\" data-reveal>\n  <div id=\"";
  if (helper = helpers.searchResultsID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchResultsID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"> </div>\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>";
  return buffer;
  });
templates['listingViewForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n            <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " asdf</li>\n          ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "checked";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"reveal-modal\" data-reveal>\n  <p class=\"lead\">Sorry, we've got an error on our hands</p>\n  <p>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"reveal-modal\" data-reveal>\n  <p class=\"lead\">Horray!</p>\n  <p>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"panel\">\n  <div class=\"row\">\n    <form id=\"listingForm\" class=\"small-12 large-4 columns\">\n      <fieldset>\n        <div class=\"row\">\n          <div class=\"small-12 large-12 columns\">\n            <label>I'm trying to:\n              <select name=\"listingType\">\n                <option value=\"1\">lease a whole apartment</option>\n                <option value=\"2\">sub lease a room, for the long term</option>\n                <option value=\"3\">sub lease a room, for the short term </option>\n                <option value=\"51\">find a whole apartment</option>\n                <option value=\"52\">find a room for the long term</option>\n                <option value=\"53\">find a room for the short term</option>\n              </select>\n            </label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"small-6 large-6 columns\">\n            <span data-tooltip class=\"has-tip\" title=\"a yearly commitment\">Long term?</span>\n          </div>\n          <div class=\"small-6 large-6 columns\">\n            <span data-tooltip class=\"has-tip\" title=\"1 to 3 months or more\">Short term?</span>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <ul>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.likes), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </ul>\n        </div>\n      </fieldset>\n    </form>\n    <form id=\"criteriaForm\" class=\"small-12 large-8 columns\">\n      <fieldset>\n        <div class=\"row\">\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>Date available from<small> required</small>\n              <input name=\"availableFromDate\" type=\"date\" value=\"";
  if (helper = helpers.availableFromDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableFromDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"XX/XX/XXXX\" required>\n            </label>\n          </div>\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>Date available to<small> required</small>\n              <input name=\"availableToDate\" type=\"date\" value=\"";
  if (helper = helpers.availableToDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableToDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"XX/XX/XXXX\" required>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>Number and Street Name<small> required</small>\n              <input name=\"addrLine\" type=\"text\" value=\"";
  if (helper = helpers.addrLine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrLine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"123 S. Halsted St\" required>\n            </label>\n          </div>\n          <div class=\"small-12 medium-6 large-6 columns\">\n            <label>Apartment Number<br>\n              <input name=\"addrAptNum\" type=\"text\" value=\"";
  if (helper = helpers.addrAptNum) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrAptNum); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"Apt Num\">\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>City<small> required</small><br>\n              <input name=\"addrCity\" type=\"text\" value=\"";
  if (helper = helpers.addrCity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrCity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"City\" required>\n            </label>\n          </div>\n          <div class=\"small-6 medium-4 large-4 columns\">\n            <label>State<small> required</small><br>\n              <input name=\"addrState\" type=\"text\" value=\"";
  if (helper = helpers.addrState) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrState); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"State\" required>\n            </label>\n          </div>\n          <div class=\"small-6 medium-4 large-4 columns\">\n            <label>ZIP<small> required</small><br>\n              <input name=\"addrZip\" type=\"number\" value=\"";
  if (helper = helpers.addrZip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.addrZip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"ZIP\" required>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-6 medium-6 large-6 columns\">\n            <label>Contact Email<small> required</small><br>\n              <input name=\"contactEmail\" type=\"email\" value=\"";
  if (helper = helpers.contactEmail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contactEmail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"user@domain.com\" required>\n            </label>\n          </div>\n          <div class=\"small-6 medium-6 large-6 columns\">\n            <label>Maximum Price<small> required</small>\n              <input name=\"price\" type=\"number\" value=\"";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Bedrooms<small> required</small>\n              <input name=\"bedrooms\" type=\"number\" value=\"";
  if (helper = helpers.bedrooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bedrooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n            </label>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Full Bathrooms<small> required</small>\n              <input name=\"fullBathrooms\" type=\"number\" value=\"";
  if (helper = helpers.fullBathrooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fullBathrooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"full\" required>\n            </label>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Half Bathrooms<small> required</small>\n              <input name=\"halfBathrooms\" type=\"number\" value=\"";
  if (helper = helpers.halfBathrooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.halfBathrooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"half\" required>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Utilities Included<br>\n              <p>\n              <input name=\"heatInc\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.heatInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Heat</label><br>\n              <input name=\"waterInc\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.waterInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Water</label><br>\n              <input name=\"garbageInc\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.garbageInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Garbage</label><br>\n              <input name=\"electricInc\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.electricInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Electricity</label><br>\n              <input name=\"internetInc\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.internetInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Internet</label>\n              </p>\n            </label>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Square Feet Of Apartment<br>\n              <input name=\"squareFeet\" type=\"number\" pattern=\"number\" value=\"";
  if (helper = helpers.squareFeet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.squareFeet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><br>\n            </label>\n            <input name=\"smokingAllowed\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.smokingAllowed), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Smoking Allowed</label><br>\n          </div>\n          <div class=\"small-12 medium-4 large-4 columns\">\n            <label>Pets Allowed<br>\n              <p>\n              <input name=\"dogAllowed.name\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dogAllowed), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Dogs Allowed</label><br>\n              <input name=\"catAllowed.name\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.catAllowed), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "><label>Cats Allowed</label>\n              </p>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"small-12 medium-12 large-12 columns\">\n            <input class=\"button left\" type=\"submit\" name=\"submit\"/>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.submitMessages)),stack1 == null || stack1 === false ? stack1 : stack1.error), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.submitMessages)),stack1 == null || stack1 === false ? stack1 : stack1.success), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates['listingViewComplete'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<li class=\"bullet-item\">Square Feet: ";
  if (helper = helpers.sqaureFeet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sqaureFeet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Heat Included</li>";
  }

function program5(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Water Included</li>";
  }

function program7(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Garbage Included</li>";
  }

function program9(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Electricity Included</li>";
  }

function program11(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Internet Included</li>";
  }

function program13(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Dogs Allowed</li>";
  }

function program15(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Cats Allowed</li>";
  }

function program17(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Smoking Allowed</li>";
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
  if (helper = helpers.postedByName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.postedByName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <a class=\"button\" href=\"#\">More Information</a></li>\n    </ul>\n  </div>\n\n<!---\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <div class=\"row\">\n      <fieldset>\n        ";
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
    + "</span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  ---->\n  \n</div>\n\n<div id=\"MoreInfoModal\" class=\"reveal-modal\" data-reveal>\n  <p class=\"lead\">Full listing:</p>\n  <ul class=\"pricing-table\">\n    <li class=\"bullet-item\">Available From: ";
  if (helper = helpers.availableFromDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableFromDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <li class=\"bullet-item\">Available To: ";
  if (helper = helpers.availableToDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableToDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <li class=\"bullet-item\"></li>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.squareFeet), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.heatInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.waterInc), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.garbageInc), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.electricInc), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.internetInc), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dogAllowed), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.catAllowed), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.smokingAllowed), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>";
  return buffer;
  });
templates['listingViewComplete'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<li class=\"bullet-item\">Square Feet: ";
  if (helper = helpers.sqaureFeet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sqaureFeet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Heat Included</li>";
  }

function program5(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Water Included</li>";
  }

function program7(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Garbage Included</li>";
  }

function program9(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Electricity Included</li>";
  }

function program11(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Internet Included</li>";
  }

function program13(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Dogs Allowed</li>";
  }

function program15(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Cats Allowed</li>";
  }

function program17(depth0,data) {
  
  
  return "<li class=\"bullet-item\">Smoking Allowed</li>";
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
  if (helper = helpers.postedByName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.postedByName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> <a class=\"button\" href=\"#\">More Information</a></li>\n    </ul>\n  </div>\n\n<!---\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <div class=\"row\">\n      <fieldset>\n        ";
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
    + "</span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  ---->\n  \n</div>\n\n<div id=\"MoreInfoModal\" class=\"reveal-modal\" data-reveal>\n  <p class=\"lead\">Full listing:</p>\n  <ul class=\"pricing-table\">\n    <li class=\"bullet-item\">Available From: ";
  if (helper = helpers.availableFromDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableFromDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <li class=\"bullet-item\">Available To: ";
  if (helper = helpers.availableToDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableToDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <li class=\"bullet-item\"></li>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.squareFeet), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.heatInc), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.waterInc), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.garbageInc), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.electricInc), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.internetInc), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dogAllowed), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.catAllowed), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.smokingAllowed), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>";
  return buffer;
  });
templates['privacyPolicy'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div class=\"panel\">\n    <div class=\"small-12 medium-12 large-12\">\n      <h3>Privacy Policy</h3>\n      <p>\n        <ul>\n          <li>Here at Social Living at UIC, we use session based tracking to validate our users. That means that you and only you will have access to your account and listings. We will never share your information with other companies.</li>\n          <li>We use your Facebook profile for two things: login credentials and your likes. This way, we will never jeopardize your passwords as they will be maintained by Facebook. Your likes will be attached to your listing. As this application is in a pre-release state, we will work on having you select your top five Facebook likes.</li>\n          <li>Your profile picture will only be visible to you. This isn't entirely necessary for the function of the application, but we think that it provides a more unique user experience!</li>\n          <li>At Social Living at UIC, your privacy is important to us and if you feel that our services do not meet your level of privacy, we would love to know how to enrich our service.</li>\n          <li>Any questions can be sent to: ";
  if (helper = helpers.contactEmail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contactEmail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n      </o>\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['searchView_apptList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"small-6 medium-4 large-3 columns\">\n    <ul class=\"pricing-table\">\n      <li class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.addrLine)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"price\">$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.price)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"bullet-item\">Bedrooms: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.bedrooms)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"bullet-item\">Bathrooms: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.fullBathrooms)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " + "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.halfBathrooms)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"cta-button\"><a class=\"button\" href=\"#\">More Info</a></li>\n    </ul>\n  </div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.listings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['searchView_socialList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"small-6 medium-4 large-3 columns\">\n    <ul class=\"pricing-table\">\n      <li class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.addrLine)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"price\">$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.price)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      <li class=\"bullet-item\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.postedByName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " is interested in:</li>\n      <li>"
    + escapeExpression(((stack1 = (depth0 && depth0.likes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.likes), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <li class=\"cta-button\"><a class=\"button\" href=\"#\">Contact</a></li>\n    </ul>\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n        <li class=\"bullet-item\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n      ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.listings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();