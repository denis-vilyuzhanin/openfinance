define(["jquery", "underscore", "backbone", "components"], 
	   function($, _, Backbone, components){
	
	return Backbone.View.extend({
		
		initialize: function(){
			this.listenTo(this.model, "change", this.renderAccount);
			this.$template = $("#accountView_template");
		},
		
		render: function() {
			this.$el = this.$template.clone();
			this.$el.removeClass("template");
			this.$el.attr('id', 'accountView');
			this._accountInfoPanel = new components.AccountInfoPanel({
				el: this.$el.find(".accountInfo")
			});
			this.renderAccount();
			return this;
		},
		
		renderAccount: function() {
			this._accountInfoPanel.render(this.model.attributes);
		}
	});
});