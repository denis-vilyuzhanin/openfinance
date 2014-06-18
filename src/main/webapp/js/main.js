requirejs.config({
	paths: {
		"jquery": "lib/jquery-2.1.1",
		"bootstrap": "lib/bootstrap-3.1.1",
		"underscore": "lib/underscore-1.6.0",
		"backbone": "lib/backbone-1.1.2"
	},
	shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "underscore", "bootstrap", "backbone", "application"], 
		function ($, _, bootstrap, backbone, application) {
	
});