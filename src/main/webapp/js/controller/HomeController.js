define(["underscore", "backbone"], 
		function(_, Backbone, View, Model){
	return Backbone.Router.extend({
		
		routes: {
			"": function() {
				alert("Home");
			}
		},
		
		initialize: function(options) {
			this.application = options.application;
		
		}
	});
});