/*
Author : @ggendre
Description : This file is a little bit of glue I use for handlebars templates
It allows me to avoid the compile step and use precompiled templates if available or ajax for them if I'm in debug mode
see also app.debugTemplates and app.debugInBrowser.
to compile them, run 'python compile.py' it needs nodejs and handlebars package. Yes, I know, I have to gulp this.
I will create a real lib to expose this better one day.
 */
(function () {
  var templates = {
    debug: true,
    templates: [],
    compiledTemplates: {},
    log: function (stuff) {
      if (window.console && console.log) {
        console.log(stuff)
      }
      if (templates.debug) {
        cobalt.log(stuff)
      }
    },
    init: function () {
      if (window.Handlebars) {
        //usefull
        Handlebars.registerHelper('if', templates.templateTags.ifBlock);
        Handlebars.registerHelper('if-in', templates.templateTags.ifInBlock);
        Handlebars.registerHelper('if-any', templates.templateTags.ifAnyBlock);
        Handlebars.registerHelper('toJson', templates.templateTags.toJson);
        this.initTemplates();
      } else {
        templates.log('please include handlebars')
      }
    },
    initTemplates: function () {
      templates.compiledTemplates = {}
      $.each(templates.templates, function (key, item) {
        var tpl_string = undefined;
        var tpl_name = undefined;
        var skip_this_tpl = false;
        if (item.name) {
          tpl_name = item.name;
          tpl_string = item.tpl;
        } else {
          tpl_name = item;
        }
        if (!templates.compiledTemplates[tpl_name]) {
          if (Handlebars.templates[tpl_name]) {
            if (app.debugInBrowser && app.debugTemplates) {
              app.log('existing precomp template will be ignored', tpl_name);
            } else {
              app.log('using precomp template', tpl_name);
              skip_this_tpl = true;
            }
          }
          if (!tpl_string && !skip_this_tpl) {
            tpl_string = $('#tpl_' + tpl_name).html();
          }
          if (!tpl_string && !skip_this_tpl) {
            if (app.debugInBrowser && app.debugTemplates) {
              app.log('Warning, AJAXING for template', tpl_name, '! Dont forget load precomp version in html file');
              var url = 'tpl/src/' + tpl_name + '.handlebars';
              $.ajax({
                url: url,
                async: false,
                success: function (data) {
                  tpl_string = data;
                },
                error: function () {
                  app.log('error loading template', tpl_name)
                }
              })
            } else {
              app.log('Warning template not found', tpl_name, '. Did you load in your html file?')
            }
          }
          if (tpl_string && !skip_this_tpl) {
            templates.compiledTemplates[tpl_name] = Handlebars.compile(tpl_string);
          }


        } else {
          app.log('tpl', item, 'already exists');
        }
      })
    },
    addAsPartials: function (template_list) {
      $.each(template_list, function (key, item) {
        var compiledTemplate = templates.compiledTemplates[item];
        if (!compiledTemplate && Handlebars.templates && Handlebars.templates[item]) {
          compiledTemplate = Handlebars.templates[item];
        }
        Handlebars.registerPartial(item, compiledTemplate);

      })
    },
    apply: function (templateName, obj) {
      if (templates.compiledTemplates[templateName]) {
        return templates.compiledTemplates[templateName](obj || {});
      }
      if (Handlebars.templates[templateName]) {
        return Handlebars.templates[templateName](obj || {});
      }
      templates.log('unknown template ' + templateName);
      return "";
    },
    templateTags: {
      toJson: function (obj) {
        return JSON.stringify(obj);
      },
      //enables if blocks in templates. either #if toto and #if toto "value"
      //else block is also enabled
      ifBlock: function (conditional, test_or_options, options) {
        if (options) {
          //we got three args so we should check that "conditional==test_or_options"
          if (conditional == test_or_options) {
            return options.fn(this);
          } else {
            return options.inverse(this);
          }
        } else {
          //we got two args so we should only check that conditional exists.
          //if it's an array we check its length
          if (Object.prototype.toString.call(conditional) == "[object Array]") {
            if (conditional.length != 0) {
              return test_or_options.fn(this);
            }
            return test_or_options.inverse(this);
          }
          //else we just check if conditionnal exists
          if (conditional) {
            return test_or_options.fn(this);
          }
          return test_or_options.inverse(this);
        }
      },
      ifInBlock: function (conditional) {
        var possibilities = Array.prototype.slice.call(arguments)//.shift();
        possibilities.shift();
        var handlbar = possibilities.pop();
        if (possibilities.indexOf(conditional) >= 0) {
          return handlbar.fn(this);
        } else {
          return handlbar.inverse(this);
        }
      },
      ifAnyBlock: function () {
        var possibilities = Array.prototype.slice.call(arguments)
        var handlbar = possibilities.pop();
        for (var possibility in possibilities) {
          if (possibilities[possibility]) {
            return handlbar.fn(this);
          }
        }
        return handlbar.inverse(this);
      }
    }
  };

  t = function (templateText, value) {
    return Handlebars.compile(templateText)(value)
  }
  window.templates = templates;
  window.t = t;
})();


