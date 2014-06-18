
define(["jquery", "underscore", "backbone", "Router"], 
		function($, _, Backbone, Router){
	
	return Backbone.Model.extend({
		
		initialize: function() {
			this.router = new Router();
		},
		start: function() {
			Backbone.history.start();
		}
	});
});