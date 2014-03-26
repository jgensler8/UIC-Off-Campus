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
})();