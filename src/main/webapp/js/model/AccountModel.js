define(["underscore", "backbone", "model/AccountsModel"], function(_, Backbone, AccountsModel){
	return Backbone.Model.extend({
		
		fetch: function() {
			var _this = this;
			var accounts = new AccountsModel();
			accounts.fetch({
				success: function() {
					_this.set(accounts.at(0).attributes);
					_this.trigger("sync");
				}
			});
		}
		
	});
});

