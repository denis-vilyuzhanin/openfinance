define(["jquery", "underscore", "backbone"], 
	   function($, _, Backbone){
	
	return Backbone.View.extend({
		
		initialize: function(){
			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.model, "sync", this.renderAccountsList);
			this.$template = $("#accountsView_template");
			this.$itemTemplate = this.$template.find(".template.list-group-item");
		},
		
		render: function() {
			this.$el = this.$template.clone();
			this.$el.removeClass("template");
			this.$el.attr('id', 'accountsView');
			this.renderAccountsList();
			return this;
		},
		
		renderAccountsList: function() {
			var _this = this;
			this.$el.empty();
			this.model.each(function(accountShortInfo) {
				var $item = _this.$itemTemplate.clone();
				var accountNumber = accountShortInfo.get("accountNumber");
				$item.find(".accountNumber").text(accountNumber).attr('href', "#account/" + accountNumber);
				$item.find(".accountCustomer").text(accountShortInfo.get("accountCustomer"));
				$item.find(".customerEDPNOU").text(accountShortInfo.get("customerEDPNOU"));
				$item.find(".bank").text(accountShortInfo.get("bank"));
				$item.find(".bankCode").text(accountShortInfo.get("bankCode"));
				$item.find(".description").text(accountShortInfo.get("description"));
				_this.$el.append($item);
				$item.removeClass("template");
			});
		}
	});
});