var ListingView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'renderComplete', 'renderSmall', 'renderForm');
  },
  renderComplete: function(){
    this.$el.html( Handlebars.templates.listingViewComplete( this.model));
    return this;
  },
  renderSmall: function(){
    //TODO
    this.$el.html( Handlebars.templates.listingViewSmall( this.model));
    return this;
  },
  renderForm: function(){
    this.$el.html( Handlebars.templates.listingViewForm( this.model));
    return this;
  }
})