define(["underscore", "backbone", "jquery.csv"], 
		function(_, Backbone, csv){
	return Backbone.Collection.extend({
		
		parse: function(csv) {
			return $.csv.toObjects(csv, {
				separator: ";",
				delimiter: '"'
			});
		},
		
		fetch: function(options) {
			options = options ? options : {};
			options.dataType = "text";
			Backbone.Collection.prototype.fetch.call(this, options);
		}
	});
});