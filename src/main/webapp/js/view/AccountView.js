define(["jquery", "underscore", "backbone"], 
	   function($, _, Backbone){
	
	return Backbone.View.extend({
		
		initialize: function(){
			this.listenTo(this.model, "change", this.renderAccount);
			this.$template = $("#accountView_template");
		},
		
		render: function() {
			this.$el = this.$template.clone();
			this.$el.removeClass("template");
			this.$el.attr('id', 'accountView');
			this.renderAccount();
			return this;
		},
		
		renderAccount: function() {
			this.$el.find(".accountNumber").text(this.model.get("accountNumber"));
			this.$el.find(".accountCustomer").text(this.model.get("accountCustomer"));
			this.$el.find(".customerEDPNOU").text(this.model.get("customerEDPNOU"));
			this.$el.find(".bank").text(this.model.get("bank"));
			this.$el.find(".bankCode").text(this.model.get("bankCode"));
			this.$el.find(".description").text(this.model.get("description"));
		}
	});
});