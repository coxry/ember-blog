import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  suffix: '.json',
  namespace: 'api/v1',

  pathForType: function(type) {
    return this._super(type) + this.get('suffix');
  }
});
