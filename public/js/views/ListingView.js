var ListingView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'renderComplete', 'renderSmall', 'renderForm', 'checkDisables'
      , 'submitForm', 'showOnMap');
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
  },
  events: {
    'change [id="listType"]': 'checkDisables',
    'change [id="criteriaForm"]': 'contentChanged',
    'change [id="listingForm"]': 'contentChanged',
    'submit': 'submitForm',
    'click': 'showOnMap'
  },
  checkDisables: function(event){
    console.log(event.target.value);
    //TODO
  },
  contentChanged: function(event){
    this.model.set(event.target.name,event.target.value);
  },
  submitForm: function(event){
    event.preventDefault();
    this.model.set('postedBy', "JEFF");
    this.model.set('lat', 9001);
    this.model.set('lon', 9001)
    this.model.save({}, {
      succes: function( model, response){
        console.log("SUCCESS");
      },
      error: function( model, response){
        console.log("FAILURE");
      }
    });
  },
  showOnMap: function(){
    
  }
})