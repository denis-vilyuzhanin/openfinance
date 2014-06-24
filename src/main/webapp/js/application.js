define([ "jquery", "underscore", "backbone", "controllers", "view/ApplicationView"], 
		function($, _, Backbone, controllers, ApplicationView) {

	return {
		start : function() {
			this.applicationView = new ApplicationView();
			var options = {
				application : this
			};
			this.controllers = {
				home : new controllers.HomeController(options),
				accounts : new controllers.AccountsController(options),
				account: new controllers.AccountController(options)
			};
			Backbone.history.start();
		},

		getView : function() {
			return this.applicationView;
		}
	};
	/*
	 * return Backbone.Model.extend({
	 * 
	 * initialize : function() { this.body = $("#body"); var options = {
	 * application : this }; this.controllers = { home : new Home(options),
	 * accounts : new Accounts(options) }; }, start : function() {
	 * Backbone.history.start(); }, show : function(view) { view.render();
	 * this.body.empty(); this.body.append(view.$el); } });
	 */
});