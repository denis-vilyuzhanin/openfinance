var d = new Date();
var bust = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "T" + d.getHours() + ":" + d.getMinutes();

requirejs.config({
	urlArgs : "bust=" + bust,
	paths : {
		"jquery" : "lib/jquery-2.1.1",
		"bootstrap" : "lib/bootstrap-3.1.1",
		"underscore" : "lib/underscore-1.6.0",
		"backbone" : "lib/backbone-1.1.2",
		"jquery.csv" : "lib/jquery.csv-0.71"
	},
	shim : {
		"bootstrap" : {
			deps : [ "jquery" ]
		}
	}
});

require([ "jquery", "underscore", "bootstrap", "backbone", "application" ], function($, _, bootstrap, backbone, application) {
	application.start();
});