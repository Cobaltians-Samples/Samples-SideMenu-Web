app.page = {
  name: 'pageD',
  templates: [
    'page',
    'item',
    { name : 'link',
      tpl : '<p><span class="link" data-page="{{page}}">{{name}}</span></p>'
    }
  ],
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

    $('#content').append(templates.apply('link', {
      name : 'Sub-navigation sample',
      page : 'pageE.html'
    }));

    app.touch('.link',function(){
      var link = $(this);
      cobalt.navigate.push({
        page : link.attr('data-page'),
        controller:'default'
      })
    });

  }
};
app.start();



				
