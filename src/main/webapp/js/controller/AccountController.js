define(["underscore", "backbone", "view/AccountView", "model/AccountModel"], 
		function(_, Backbone, AccountView, AccountModel){
	return Backbone.Router.extend({
		
		routes: {
			"account/:accountNumber": function(accountNumber) {
				this.model.fetchAccount(accountNumber);
				this.application.getView().show(this.view);
			}
		},
		
		initialize: function(options) {
			this.application = options.application;
			this.model = new AccountModel();
			this.view = new AccountView({
				model: this.model
			});
		}
	});
});