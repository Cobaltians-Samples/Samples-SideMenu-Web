app.page = {
  name: 'home',
  templates: ['page', 'item'],
  partials: ['item'],
  init: function (data) {

    $('#content').html(templates.apply('page', {
      icon: "fa fa-home",
      title: "Home",
      descr : 'Welcome on board. You can use the sidemenu to switch pages',
      items: [
        {name: "foo"},
        {name: "bar"},
        {name: "foo"},
        {name: "bar"},
        {name: "foo"},
        {name: "bar"},
        {name: "foo"},
        {name: "bar"},
        {name: "foo"},
        {name: "bar"},
        {name: "foo"},
        {name: "bar"},
        {name: "foo"},
        {name: "bar"},
        {name: "foo"},
        {name: "bar"}
      ]
    }));
  }
};
app.start();



				
