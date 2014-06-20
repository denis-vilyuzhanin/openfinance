define(["underscore", "backbone", "jquery.csv", "model/AccountShortInfoModel"], 
		function(_, Backbone, csv, AccountShortInfoModel){
	return Backbone.Collection.extend({
		url: "mock/api/accounts.csv",
		
		parse: function(csv) {
			var data = $.csv.toObjects(csv);
			alert(data);
		}
	});
});