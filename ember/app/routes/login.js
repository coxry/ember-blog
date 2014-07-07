import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
  },
  actions: {
    sessionAuthenticationFailed: function(message) {
      this.controller.set('errorMessage', message);
    }
  }
});
