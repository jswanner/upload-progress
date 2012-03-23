require 'sinatra'

get '/' do
  haml :index
end

get '/app.css' do
  scss :app
end

get '/app.js' do
  coffee :app
end

post '/' do
end
