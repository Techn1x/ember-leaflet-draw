import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('examples', function() {
    this.route('basic-use');
    this.route('overview');
    this.route('installation');
  });
  this.route('docs', function() {
    this.route('installation');
    this.route('basic-use');
    this.route('overview');
  });
});

export default Router;
