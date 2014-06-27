define(["underscore", "backbone", "model/AccountsModel"], function(_, Backbone, AccountsModel){
	return Backbone.Model.extend({
		
		fetch: function() {
			var _this = this;
			var accountNumber = this.get("accountNumber");
			var accounts = new AccountsModel();
			accounts.fetch({
				success: function() {
					for(var i = 0; i < accounts.length; i++) {
						if (accountNumber == accounts.at(i).get("accountNumber")) {
							_this.set(accounts.at(i).attributes);
							_this.trigger("sync");
							break;
						}
					}
				}
			});
		}
		
	});
});

