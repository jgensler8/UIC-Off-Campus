var HelpView = Backbone.View.extend({
  options: {
    title: 'Welcome to Help',
    howTo: {
      title: 'How to:',
      howTos:
        [ {id: 1, title: 'How to log in', response: 'Click Account and sign in with Facebook.'},
          {id: 2, title: 'How to host an ad', response: 'Navigate to the "Create" tab and fill out the listing there. You must be logged in to create a listing.'} ]
    },
    faq:{
      title: 'Frequently asked questions:',
      faqs:
        [ { id: 1, title: 'How long is an ad posting available?', response: 'Indefinitely for now. Will change soon to be 3 months.'},
          { id: 2, title: 'How can I take a listing down?', response: 'Go to account and select the listing you wish to delete.'},
          { id: 3, title: 'Is my Facebook information visible to the public?', response: 'The short answer is yes. See our privacy policy section for more details.'},
          { id: 3, title: 'How do I disconnect my Facebook from Social Living at UIC?', response: 'Settings > Apps. Then scroll until you find Social Living at UIC and remove permissions.'} ]
    }
  },
  render: function(){
    this.$el.html( Handlebars.templates.helpView(this.options));
    return this;
  }
});