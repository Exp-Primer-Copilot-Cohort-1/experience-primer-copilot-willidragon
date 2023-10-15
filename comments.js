//create web server
//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.name + " " + q.comment;
  fs.appendFile('comments.txt', txt, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.write('<a href="index.html">Back to home</a>');
  res.end();
}).listen(8080);