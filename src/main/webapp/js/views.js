define(["view/home", "view/customers", "view/Accounts"],
		function(Home, Customers, Accounts){
	return {
		accounts: new Accounts()
	};
});