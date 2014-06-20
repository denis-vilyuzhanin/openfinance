define(["underscore", "backbone", "model/AccountShortInfoModel"], function(_, Backbone, AccountShortInfoModel){
	return Backbone.Collection.extend({
		url: "mock/api/accounts.jsp"
	});
});