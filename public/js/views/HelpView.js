var HelpView = Backbone.View.extend({
  options: {
    title: 'Welcome to Help',
    howTo: {
      title: 'How to:',
      howTos:
        [ {id: 1, title: 'How to log in', response: 'Go to the login section and click a thing'},
          {id: 2, title: 'How to host an add', response: 'Navigate to the "Create" tab and fill out the listing there. You must be logged in to create a listing'} ]
    },
    faq:{
      title: 'Frequently asked questions:',
      faqs:
        [ { id: 1, title: 'How long is an add posting available?', response: '3 months'},
          { id: 2, title: 'How can I take a listing down?', response: 'Go to account and select the listing you wish to delete'},
          { id: 3, title: 'Is my Facebook information visible to the public?', response: 'The short answer is yes. See our privacy policy section for more details'} ]
    }
  },
  render: function(){
    this.$el.html( Handlebars.templates.helpView(this.options));
    return this;
  }
});