
define(["jquery", "underscore", "backbone", "Router"], 
		function($, _, Backbone, Router){
	
	return Backbone.Model.extend({
		
		initialize: function() {
			this.router = new Router({
				application: this
			});
			this.body = $("#body");
		},
		start: function() {
			Backbone.history.start();
		},
		show: function(view) {
			view.render();
			this.body.empty();
			this.body.append(view.$el);
		}
	});
});