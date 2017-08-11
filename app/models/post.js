import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  note: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
