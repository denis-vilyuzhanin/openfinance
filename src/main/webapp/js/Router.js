define([ "jquery", "underscore", "backbone", "views" ], function($, _,
		Backbone, views) {
	return Backbone.Router.extend({
		routes : {
			"" : function() {
				alert("home");
			},
			"customers" : function() {
				alert("customers");
			}
		}
	});
});