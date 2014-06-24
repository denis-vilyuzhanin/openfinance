define(["underscore", "backbone", "jquery.csv", "model/CSVModel", ], 
		function(_, Backbone, csv, CSVModel){
	return CSVModel.extend({
		url: "mock/api/accounts.csv"
	});
});