/**
* CreatedBy    : Dinesh
* CreatedTime  : March 07 2023
* ModifiedBy   : Dinesh
* ModifiedTime : March 07 2023
* Description  : This file contains all the configurations needed for jest 
**/

const jestConfig = {

	"verbose": false,
	"reporters": [
		"default",
		["./node_modules/jest-html-reporter", {
			"pageTitle": `Platform Rest Business - Unit Test Report`,
			"dateFormat":"mm-dd-yyyy HH:MM:ss",
			"includeFailureMsg" : true,
			"outputPath": `test/.reports/Platform Rest Business - Unit Test Report.html`
		}]
	]
};

module.exports = jestConfig;