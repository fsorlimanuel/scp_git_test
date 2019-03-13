/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/techedge/scp/SAPUI5_TEST/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});