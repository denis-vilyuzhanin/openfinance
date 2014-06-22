define(["underscore", "backbone", "view/AccountsView", "model/AccountsModel"], 
		function(_, Backbone, AccountsView, AccountsModel){
	return Backbone.Router.extend({
		
		routes: {
			"accounts": function() {
				this.model.fetch({
					dataType: "text",
					error: function(resp) {
						alert("Can't load accounts data");
					}
				});
				this.application.getView().show(this.view);
			}
		},
		
		initialize: function(options) {
			this.application = options.application;
			this.model = new AccountsModel();
			this.view = new AccountsView({
				model: this.model
			});
		}
	});
});