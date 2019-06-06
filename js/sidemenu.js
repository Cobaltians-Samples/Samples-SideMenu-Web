app.page = {
  name: 'sidemenu',
  templates: ['sidemenu'],
  items : [
    //the id below must be unique, it ensure the native side don't reload this page if already loaded.
    {id: "home", page: "home.html", controller: "withSidemenu", name:"Home", selected:true},
    {id: "pageB", page: "pageB.html", controller: "withSidemenuAndPTR", name:"Page B"},
    {id: "pageC", page: "pageC.html", controller: "withSidemenu", name:"Page C"},
    {id: "pageD", page: "pageD.html", controller: "withSidemenu", name:"Page D", data : { some : 'dataForPageD'}}
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
        cobalt.publish('sidemenu:switch',item);
      }
    });
  }
};
app.start();



				
