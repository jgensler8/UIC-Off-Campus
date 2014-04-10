var AccountModel = Backbone.Model.extend({
  urlRoot: 'account',
  initialize: function(){
    _.bindAll(this, 'checkAuth');
    this.fetch();
  },
  checkAuth: function(callback){
    var self = this;
    this.fetch({
      success: function(model, response, object){
        self.set('options', model.attributes);
        if('success' in callback) callback.success(model,response);
      },
      error: function(model, response, object){
        if('error' in callback) callback.error(model, response);
      }
    });
  }
})
