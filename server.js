var http = require('http'),
    httpProxy = require('http-proxy');

var port = process.env.PORT || 1337;
httpProxy.createProxyServer({target:'http://13.75.94.137:4000/'}).listen(port);

httpProxy.createServer({
  ssl: {
    key: fs.readFileSync('server.key', 'utf8'),
    cert: fs.readFileSync('server.crt ', 'utf8')
  },
  target: 'http://13.75.94.137:4000/',
  secure: true // Depends on your needs, could be false.
}).listen(443);
