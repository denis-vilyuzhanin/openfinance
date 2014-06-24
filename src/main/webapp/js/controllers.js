
define(["controller/HomeController", "controller/AccountsController", "controller/AccountController"], 
		function(){
	var i = 0;
	return {
		HomeController: arguments[i++],
		AccountsController: arguments[i++],
		AccountController: arguments[i++]
	};
});