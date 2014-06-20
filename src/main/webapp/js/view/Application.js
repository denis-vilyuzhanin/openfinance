define(["jquery", "underscore", "backbone"], 
	   function($, _, Backbone){
	return Backbone.View.extend({
		
		initialize: function() {
			this.$el = $("body");
			this.$body = this.$el.find("#body");
		},
		
		show: function(view) {
			this.$body.empty();
			view.render();
			this.$body.append(view.$el);
		}
	});
});
