import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  note: DS.attr(),
  created: DS.attr({
  defaultValue(){
    return new Date();
  }
}),
  comments: DS.hasMany('comment', { async: true })
});
