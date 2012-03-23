class App
  init: =>
    ($ '#form').on 'submit', @submit

  submit: =>
    data = new FormData
    data.append "file#{i}", file for file, i in ($ '#file')[0].files
    xhr = new XMLHttpRequest
    xhr.upload.addEventListener "progress", @progress, false
    xhr.addEventListener "load", @load, false
    xhr.open "POST", "/"
    xhr.send data
    false

  progress: (e) ->
    if e.lengthComputable
      percentComplete = (e.loaded / e.total) * 100
      ($ '#meter').show().find('span').css('width', "#{percentComplete.toFixed()}%")

  load: ->
      ($ '#meter').hide().find('span').css('width', 0)

$ (new App).init
