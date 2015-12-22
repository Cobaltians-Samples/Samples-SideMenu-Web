app.page = {
  name: 'pageE',
  templates: ['page', 'item'],
  partials: ['item'],
  init: function (data) {
    if (data){
      cobalt.toast('received initial data from sidemenu');
    }
    $('#content').html(templates.apply('page', {
      icon: "fa fa-eye",
      title: "Page E",
      descr : 'You are on page E.<br>Notice the back button and no sidemenu here. That\'s how it has to be.'
    }));
  }
};
app.start();



				
