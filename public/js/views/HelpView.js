var HelpView = Backbone.View.extend({
  options: {
    title: 'Welcome to Help',
    howTo: {
      title: 'How to:',
      howTos:
        [ {id: 1, title: 'How to log in', response: 'Go to the login section and click a thing'},
          {id: 2, title: 'How to host an add', response: 'Account create add button etc'} ]
    },
    faq:{
      title: 'Frequently asked questions:',
      faqs:
        [ { id: 1, title: 'How long is an add posting available?', response: '3 months'},
          { id: 2, title: 'Can I take an add down?', response: 'yes'},
          { id: 3, title: 'Is my Facebook information visible to the public?', response: 'Your information is only visible to UIC students.'} ]
    }
  },
  render: function(){
    this.$el.html( Handlebars.templates.helpView(this.options));
    return this;
  }
});