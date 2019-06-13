const proxy=require('http-proxy-middleware')

module.exports= function(app){
    app.use(proxy('/api/hosters',{target: 'http://localhost:5000'}))
}