module.exports = function(app) {
  app.get('/api/v1/posts.json', function(req, res) {
    res.send({posts:[{id: 1, title: 'hello', body: 'body'}]});
  });
};
