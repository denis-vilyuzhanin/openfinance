define(["underscore", "backbone"], 
		function(_, Backbone, View, Model){
	return Backbone.Router.extend({
		
		routes: {
			"home": function() {
				alert("Home");
			}
		},
		
		initialize: function(options) {
			this.application = options.application;
		
		}
	});
});