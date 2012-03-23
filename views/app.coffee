Uploader =
  init: ->
    ($ '#form').on 'submit', Uploader.submit

  submit: ->
    data = new FormData
    data.append "file#{i}", file for file, i in ($ '#file')[0].files
    xhr = new XMLHttpRequest
    xhr.upload.addEventListener "progress", Uploader.progress, false
    xhr.addEventListener "load", Uploader.load, false
    xhr.open "POST", "/"
    xhr.send data
    false

  progress: (e) ->
    if e.lengthComputable
      percentComplete = (e.loaded / e.total) * 100
      ($ '#meter').show().find('span').css('width', "#{percentComplete.toFixed()}%")

  load: ->
    ($ '#meter').hide().find('span').css('width', 0)

$ Uploader.init
