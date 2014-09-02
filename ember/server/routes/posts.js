module.exports = function(app) {
  app.get('/api/v1/posts.json', function(req, res) {
    res.send({posts:[{id: 1, title: 'hello', body: 'body'}, {id: 2, title: 'Test Post', body: 'woot'}]});
  });
};
