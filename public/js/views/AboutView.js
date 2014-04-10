var AboutView = Backbone.View.extend({
  options: {
    title: 'Welcome to Social Living at UIC!',
    paragraphs: [ { text: 'Social Living at UIC is a place to find apartments with people that share the same interests as you!'},
                  { text: 'Integrating with a Facebook profile, Social Living at UIC can create the most accurate matches.'}],
    card: {
      name: 'Commuter Student Resource Center',
      phone: '312-413-7440',
      address: {
        street: '750 South Halsted St. MC 330',
        city: 'Chicago',
        state: 'IL',
        zip: '60607'
      },
      email: 'commuter@uic.edu'
    }
  },
  render: function(){
    this.$el.html(Handlebars.templates.aboutView(this.options));
    return this;
  }
});