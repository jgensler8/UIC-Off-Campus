var AccountView = Backbone.View.extend({
  render: function(){
    //_.bindAll(this, 'editClicked', 'deleteClicked')
    this.$el.html( Handlebars.templates.accountView(this.model.attributes));
    return this;
  },
  events:{
    'change': this.attributesChanged,
    'click [type="editReveal"]': this.editReveal,
    'click [type="editSubmit"]': 'editSubmit',
    'click [type="deleteReveal"]': 'deleteReveal',
    'click [type="deleteSubmit"]': 'deleteSubmit',
    'click [id="logout"]': 'logout',
  },
  attributesChanged: function(){
    //TODO maybe?
  },
  editReveal: function(event){
    $(document).foundation('reflow');
    $('#edit'+event.target.id).foundation('reveal','open');
    _.each(this.model.get('listings'), function(listing){
      if( event.target.id === listing._id){
        $('#template'+event.target.id).html( Handlebars.templates.listingViewForm(listing) );
      };
    });
  },
  editSubmit: function(event){
    console.log(event);
    $.ajax({
      type: 'PUT',
      url: 'listing/' + event.target.id,
      data: '',
      success: function(){
        console.log("success edit");
      },
      error: function(){
        console.log("error with ajax");
      }
    });
  },
  deleteReveal: function(event){
    $(document).foundation('reflow'); 
    $('#delete'+event.target.id).foundation('reveal','open');
    $(document).foundation('reflow');
  },
  deleteSubmit: function(event){
    console.log(event);
    $.ajax({
      type: 'DELETE',
      url: 'listing/' + event.target.id,
      success: function(){
        console.log("success delete");
      },
      error: function(){
        console.log("error with ajax");
      }
    });
  },
  logout: function(){
    $.ajax({
      type: 'POST',
      url: 'logout',
      success: function(){
        //ap;p.redirect('#');
      },
    })
  }
});