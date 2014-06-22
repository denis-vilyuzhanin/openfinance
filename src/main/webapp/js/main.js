requirejs.config({
	urlArgs : getParameterByName("bust") ? "bust=" + getParameterByName("bust") : "",
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
		},
		"jquery.csv" : {
			deps : ["jquery"]
		}
	}
});

require(["application"], function(application) {
	application.start();
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}