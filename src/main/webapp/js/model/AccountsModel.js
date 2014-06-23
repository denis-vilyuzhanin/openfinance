define(["underscore", "backbone", "jquery.csv", "model/CSVModel", "model/AccountModel"], 
		function(_, Backbone, csv, CSVModel, AccountModel){
	return CSVModel.extend({
		url: "mock/api/accounts.csv"
	});
});