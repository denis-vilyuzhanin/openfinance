define([ "jquery", "underscore", "backbone", "view/Application",
		"controller/Home", "controller/Accounts" ], function($, _, Backbone,
		ApplicationView, HomeController, AccountsController) {
	
	return {
		start : function() {
			this.applicationView = new ApplicationView();
			var options = {
				application: this
			};
			this.controllers = {
				home: new HomeController(options),
				accounts: new AccountsController(options)
			};
			Backbone.history.start();
		},
		
		getView: function() {
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