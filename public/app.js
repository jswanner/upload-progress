(function() {
  var App,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  App = (function() {

    function App() {
      this.submit = __bind(this.submit, this);
      this.init = __bind(this.init, this);
    }

    App.prototype.init = function() {
      return ($('#form')).on('submit', this.submit);
    };

    App.prototype.submit = function() {
      var data, file, i, xhr, _len, _ref;
      data = new FormData;
      _ref = ($('#file'))[0].files;
      for (i = 0, _len = _ref.length; i < _len; i++) {
        file = _ref[i];
        data.append("file" + i, file);
      }
      xhr = new XMLHttpRequest;
      xhr.upload.addEventListener("progress", this.progress, false);
      xhr.addEventListener("load", this.load, false);
      xhr.open("POST", "/");
      xhr.send(data);
      return false;
    };

    App.prototype.progress = function(e) {
      var percentComplete;
      if (e.lengthComputable) {
        percentComplete = (e.loaded / e.total) * 100;
        return ($('#meter')).show().find('span').css('width', "" + (percentComplete.toFixed()) + "%");
      }
    };

    App.prototype.load = function() {
      return ($('#meter')).hide().find('span').css('width', 0);
    };

    return App;

  })();

  $((new App).init);

}).call(this);
