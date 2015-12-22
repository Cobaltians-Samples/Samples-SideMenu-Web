app.page = {
  name: 'sidemenu',
  templates: ['sidemenu'],
  items : [
    {id: "home", page: "home.html", controller: "default", name:"Home", selected:true},
    {id: "pageB", page: "pageB.html", controller: "default", name:"Page B"},
    {id: "pageC", page: "pageC.html", controller: "default", name:"Page C"},
    {id: "pageD", page: "pageD.html", controller: "default", name:"Page D", data : { some : 'dataForPageD'}}
  ],
  init: function (data) {

    $('#content').html(templates.apply('sidemenu', { items:  app.page.items }));
    app.page.bind('li');
  },
  getItemById:function(source, value, idKey){
    if (!idKey) idKey='id';
    var arr = $.grep(source, function(item){
      return (item[idKey] === value)
    })
    if (arr && arr.length){
      return arr[0];
    }
  },
  bind:function(selector){
    app.touch(selector,function(){
      var item = app.page.getItemById(app.page.items, $(this).attr('data-id'));
      if (item){
        $(selector).removeClass('selected');
        $(this).addClass('selected')
        app.log('sending switch event with item=',item);
        cobalt.sendEvent('sidemenu:switch',item);
      }
    });
  }
};
app.start();



				
