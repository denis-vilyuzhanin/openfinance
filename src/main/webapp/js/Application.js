define([ "jquery", "underscore", "backbone", "controller/Home",
		"controller/Accounts" ], 
		function($, _, Backbone, Home, Accounts) {

	return Backbone.Model.extend({

		initialize : function() {
			this.body = $("#body");
			var options = {
				application : this
			};
			this.controllers = {
				home : new Home(options),
				accounts : new Accounts(options)
			};

		},
		start : function() {
			Backbone.history.start();
		},
		show : function(view) {
			view.render();
			this.body.empty();
			this.body.append(view.$el);
		}
	});
});