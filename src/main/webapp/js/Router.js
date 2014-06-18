define([ "jquery", "underscore", "backbone", "views" ], 
		function($, _, Backbone, views) {
	return Backbone.Router.extend({
		routes : {
			"" : function() {
				
			},
			"accounts": function() {
				this.application.show(views.accounts);
			},
			"customers" : function() {
				
			}
		},
		
		initialize: function(options) {
			this.application = options.application;
		}
	});
});