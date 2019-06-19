const proxy=require('http-proxy-middleware')

module.exports= function(app){
    app.use(proxy(['/api/hosters','/api/hostersList','/hosters'],{target: 'http://localhost:5000'}))
}