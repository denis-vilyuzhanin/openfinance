define(["underscore", "backbone", "view/AccountsView", "model/AccountsModel"], 
		function(_, Backbone, View, Model){
	return Backbone.Router.extend({
		
		routes: {
			"accounts": function() {
				this.application.getView().show(this.view);
			}
		},
		
		initialize: function(options) {
			this.application = options.application;
			this.model = new Model();
			this.view = new View({
				model: this.model
			});
		}
	});
});