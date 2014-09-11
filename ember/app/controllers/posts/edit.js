import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('posts.show', this.model.get('id'));
    },
    submit: function() {
      this.model.save();
      this.transitionToRoute('posts.show', this.model.get('id'));
    }
  }
});

