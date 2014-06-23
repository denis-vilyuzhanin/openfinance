define(["underscore", "backbone", "jquery.csv"], 
		function(_, Backbone, csv){
	return Backbone.Collection.extend({
		
		parse: function(csv) {
			return $.csv.toObjects(csv, {
				separator: ";",
				delimiter: '"'
			});
		}
	});
});