
define(["controller/HomeController", "controller/AccountsController"], 
		function(){
	var i = 0;
	return {
		HomeController: arguments[i++],
		AccountsController: arguments[i++]
	};
});