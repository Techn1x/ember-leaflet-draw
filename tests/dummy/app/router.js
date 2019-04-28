import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
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
    this.route('config-enable-editing');
    this.route('config-enable-deleting');
    this.route('config-show-drawing-layer');
    this.route('config-draw');
    this.route('config-edit');
    this.route('config-position');
  });
});

export default Router;
