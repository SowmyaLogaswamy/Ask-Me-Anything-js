import Ember from 'ember';
var posts = [{
  id: 1,
  author: "Sowmya Logaswamy",
  question: "What is Amazon's approach to product management and product developement?",
  note: "I just want to know about the work going on in the Amazon"
}, {
  id: 2,
  author: "Bella Santacruz",
  question: "What is the perfect startup team?",
  note: "Am gonna start a new company and wants to know about this more"
}, {
  id: 3,
  author: "Clara Bindu",
  question: "What is the difference between UI and UX design?",
  note: "Am always confused between these two. I need clarification regarding this."
}];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});
