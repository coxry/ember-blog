import Ember from 'ember';

function markDown(value) {
  var converter = new Showdown.converter();
  return new Ember.Handlebars.SafeString(converter.makeHtml(value));
}

export {
  markDown
};

export default Ember.Handlebars.makeBoundHelper(markDown);
