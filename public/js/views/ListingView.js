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
  },
  checkDisables: function(event){
    console.log(event.target.value);
    //TODO
  },
  contentChanged: function(event){
    this.model.set(event.target.name,event.target.value);
  },
  submitForm: function(event){
    event.preventDefault();;
    this.model.set('listingType', 1);
    this.model.set('postedBy', "JEFF");
    this.model.set('postDate', this.model.get('availableFromDate'));
    this.model.save({}, {
      success: function( model, response){
        if( response.error === true){
          $(document).foundation('reflow');
          $('#'+response.type).foundation('reveal','open');
        }
      },
      error: function( model, response){
        console.log("LISTING MESSAGE ERROR");
      }
    });
  },
  showOnMap: function(){
    
  }
})