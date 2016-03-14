var http = require('http'),
    httpProxy = require('http-proxy');

var port = process.env.PORT || 1337;
httpProxy.createProxyServer({target:'http://13.75.94.137:4000/'}).listen(port);
httpProxy.createProxyServer({target:'http://13.75.94.137:4000/'}).listen(443);
