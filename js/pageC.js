app.page = {
  name: 'pageC',
  templates: ['page', 'item'],
  partials: ['item'],
  init: function (data) {

    $('#content').html(templates.apply('page', {
      icon: "fa fa-car",
      title: "Page C",
      descr : 'You are on page C. Thats fine.',
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
        {name: "bar"},
        {name: "foo"},
        {name: "bar"}
      ]
    }));
  }
};
app.start();



				
