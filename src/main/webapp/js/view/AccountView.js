define(["jquery", "underscore", "backbone"], 
	   function($, _, Backbone){
	
	return Backbone.View.extend({
		
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.model, "sync", this.renderAccount);
			this.$template = $("#accountView_template");
		},
		
		render: function() {
			this.$el = this.$template.clone();
			this.$el.removeClass("template");
			this.renderAccount();
			return this;
		},
		
		renderAccount: function() {
			this.$el.find(".accountNumber").text(this.model.get("accountNumber"));
		}
	});
});