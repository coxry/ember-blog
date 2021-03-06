import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR) {
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.access_token'))) {
      jqXHR.setRequestHeader('Authorization', this.get('session.access_token'));
    }
  }
});
