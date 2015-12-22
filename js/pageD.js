app.page = {
  name: 'pageD',
  templates: ['page', 'item'],
  partials: ['item'],
  init: function (data) {

    $('#content').html(templates.apply('page', {
      icon: "fa fa-diamond",
      title: "Page D",
      descr : 'You are on page D. We <b>had</b> to put a diamond here.'
    }));
  }
};
app.start();



				
