var app = {
  debug: true,
  //debugInBrowser: true,
  //debugTemplates : true,
  log: function (a, b, c, d, e, f, g, h, i) {
    if (app.debug) {
      cobalt.log(a, b, c, d, e, f, g, h, i);
    }
  },
  touchTimer: null,
  touch: function (selector, touchHandler, allowDefault) {
    var preventDefault = allowDefault ? false : true;
    var elem = $(selector)
    var touchup = function () {
      elem.removeClass('touched');
    };
    var touching = function (e) {
      if (!elem.hasClass('touched')) {
        elem.addClass('touched');
        clearTimeout(app.touchTimer);
        app.touchTimer = setTimeout(touchup, 1000);
        touchHandler.apply([this, e]);
      }
      if (preventDefault)
        return false;
    };
    elem.unbind('tap').on('tap', touching);
    elem.unbind('click').on('click', touching);
  },
  start: function () {
    app.page = $.extend(true, {}, app.super, app.page);
    $('body').addClass(app.page.name);
    if (window.templates) {
      $.each(app.page.templates, function (key, item) {
        templates.templates.push(item);
      });
      templates.init();
      templates.addAsPartials(app.page.partials);
    }

    cobalt.init({
      events: app.page.events,
      debug: true,
      debugInBrowser: app.debugInBrowser,
      debugInDiv: app.debugInDiv
    });

    if (app.debugInBrowser) {
      setTimeout(app.page.events.onAppStarted, 200);
      setTimeout(app.page.events.onPageShown, 250);
    }
  },
  /*
   'super' is the default/parent controller for all pages.
   When defining a page you can use only a subset of functions and values.
   This "heritage" is recursive so you can mix some templates here and in the children page
   In a page you can also redefine a function and call app.super.myFunction if needed.
   */
  super: {
    name: 'default',
    templates: [],
    partials: [],
    config: function (data) {
    },
    init: function (data) {
      app.log('page created', app.page.name, data);
      app.page.reset(data);
    },
    refresh: function (data, callback) {
      app.log('page refresh', app.page.name, data);
    },
    events: {
      "onPageShown": function (data) {
        if (!app.pageAlreadyShown) {
          app.page.config(data);
          app.page.init(data);
          app.pageAlreadyShown = true;
        } else {
          app.page.refresh(data);
        }
      }
    }
  }
};
