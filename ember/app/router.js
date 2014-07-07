import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BlogENV.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.route('show', {path: '/:post_id'});
  });
  this.route('login');
  this.route('application');
});

export default Router;
