
define(["conroller/Home", "conroller/Accounts"], 
		function(Home, Accounts){
	return {
		home: new Home(),
		accounts: new Accounts()
	};
});