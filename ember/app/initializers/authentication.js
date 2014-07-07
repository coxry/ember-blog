import RailsAuthenticator from '../authenticators/rails-authenticator';
import RailsAuthorizer from '../authorizers/rails-authorizer';

export default {
  name: 'authentication',
  before: 'simple-auth',

  initialize: function(container) {
    container.register('authorizer:rails', RailsAuthorizer);
    container.register('authenticator:rails', RailsAuthenticator);
  }
};
