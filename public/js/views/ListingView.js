var ListingView = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'renderComplete', 'renderSmall', 'renderForm', 'checkDisables', 'contentChanged', 'submitForm');
  },
  events: {
    'change [id="listType"]': 'checkDisables',
    'change [id="criteriaForm"]': 'contentChanged',
    'change [id="listingForm"]': 'contentChanged',
    'submit': 'submitForm',
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
  checkDisables: function(event){
    console.log(event.target.value);
    //TODO
  },
  contentChanged: function(event){
    this.model.set(event.target.name,event.target.value);
  },
  submitForm: function(event){
    event.preventDefault();
    this.model.save({}, {
      success: function( model, response){
        if( response.error === true){
          $(document).foundation('reflow');
          $('#'+response.type).foundation('reveal','open');
        }
        else{
          $(document).foundation('reflow');
          $('#'+response.type).foundation('reveal','open');
          $('#submit').attr('disabled', true);
        }
      },
      error: function( model, response){
        console.log("LISTING MESSAGE ERROR");
      }
    });
  }
})