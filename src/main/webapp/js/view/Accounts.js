define(["jquery", "underscore", "backbone"], 
	   function($, _, Backbone){
	
	return Backbone.View.extend({
		className: "accountsView",
		
		render: function() {
			this.$el.html("<h1>Accounts</h1>");
			return this;
		}
	});
});