define(["jquery", "underscore", "backbone"], 
	   function($, _, Backbone){
	
	return Backbone.View.extend({
		
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
			this.$template = $("#accountsView_template");
		},
		
		render: function() {
			this.$el = this.$template.clone();
			this.$el.removeClass("template");
			
			var $itemTemplate = this.$el.find(".template.list-group-item");
			for(var i = 0; i < 10; i++) {
				var $item = $itemTemplate.clone();
				$item.removeClass("template");
				this.$el.append($item);
			}
			 
			return this;
		}
	});
});