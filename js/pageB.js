app.page = {
  name: 'pageB',
  templates: ['page', 'item'],
  partials: ['item'],
  events:{
    'pullToRefresh':function(data,callback){
      app.page.clear();
      setTimeout(function(){
        app.page.fill();
        cobalt.sendCallback(callback)
      },1000);
    }
  },
  init: function (data) {
    app.page.fill();
  },
  clear:function(){
    $('#content').html('refreshing...');
  },
  fill:function(){
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



				
