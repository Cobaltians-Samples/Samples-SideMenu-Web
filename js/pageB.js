app.page = {
  name: 'pageB',
  templates: ['page', 'item'],
  partials: ['item'],
  init: function (data) {

    $('#content').html(templates.apply('page', {
      icon: "fa fa-beer",
      title: "Page B",
      descr : 'You are on page B. Note that scroll state is maintained when you use this sidemenu.',
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



				
