import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({

  tokenEndpoint: '/api/v1/token.json',

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.access_token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  invalidate: function() {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({ url: _this.tokenEndpoint, type: 'DELETE' }).always(function() {
        resolve();
      });
    });
   },

  authenticate: function(credentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: _this.tokenEndpoint,
        type: 'POST',
        data: {name: credentials.identification, password: credentials.password},
        dataType: 'json',
        beforeSend: function(xhr, settings) {
          xhr.setRequestHeader('Accept', settings.accepts.json);
        }
      }).then(function(response) {
        Ember.run(function() {
          resolve({ access_token: response.access_token });
        });
      }, function(xhr) {
        Ember.run(function() {
          reject(xhr.responseText);
        });
      });
    });
  }

});
