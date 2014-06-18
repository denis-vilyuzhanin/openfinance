define(["view/home", "view/customers", "view/accounts"],function(){
	var i = 0;
	return {
		home: arguments[i++],
		customers: arguments[i++],
		accounts: arguments[i++]
	};
});