define(["jquery", "underscore", "backbone"], 
	   function($, _, Backbone){
	
	return Backbone.View.extend({
		className: "accountsView",
		
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
		},
		
		render: function() {
			this.$el.html("<h1>Accounts</h1>");
			return this;
		}
	});
});