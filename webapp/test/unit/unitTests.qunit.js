/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/techedge/scp/SAPUI5_TEST/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});