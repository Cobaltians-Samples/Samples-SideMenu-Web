app.page = {
  name: 'pageD',
  templates: ['page', 'item'],
  partials: ['item'],
  init: function (data) {
    if (data){
      cobalt.toast('received initial data from sidemenu');
    }
    $('#content').html(templates.apply('page', {
      icon: "fa fa-diamond",
      title: "Page D",
      descr : 'You are on page D. We <b>had</b> to put a diamond here.'
    }));
  }
};
app.start();



				
