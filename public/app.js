(function() {
  var Uploader;

  Uploader = {
    init: function() {
      return ($('#form')).on('submit', Uploader.submit);
    },
    submit: function() {
      var data, file, i, xhr, _len, _ref;
      data = new FormData;
      _ref = ($('#file'))[0].files;
      for (i = 0, _len = _ref.length; i < _len; i++) {
        file = _ref[i];
        data.append("file" + i, file);
      }
      xhr = new XMLHttpRequest;
      xhr.upload.addEventListener("progress", Uploader.progress, false);
      xhr.addEventListener("load", Uploader.load, false);
      xhr.open("POST", "/");
      xhr.send(data);
      return false;
    },
    progress: function(e) {
      var percentComplete;
      if (e.lengthComputable) {
        percentComplete = (e.loaded / e.total) * 100;
        return ($('#meter')).show().find('span').css('width', "" + (percentComplete.toFixed()) + "%");
      }
    },
    load: function() {
      return ($('#meter')).hide().find('span').css('width', 0);
    }
  };

  $(Uploader.init);

}).call(this);
