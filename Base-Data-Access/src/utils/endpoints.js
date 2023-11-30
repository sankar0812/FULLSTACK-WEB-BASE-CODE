/**
* CreatedBy   : Nishanth
* CreatedTime : 04 Nov 2023
* Description : This file contains all endpoints for application
 */

module.exports = class endpoints {


	// Accounts endpoint of the REST service
	ENDPOINT_BASE_URL = "/api/rest/tms/dataaccess";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_MODULES */
	ENDPOINT_MODULE_USER = "/1.0.0/user"

	// Endpoint versions for the REST Service
	ENDPOINT_VERSION_1 = "/v1";
	ENDPOINT_VERSION_2 = "/v2";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_TABLES */

	ENDPOINT_USER = "/user";
	ENDPOINT_USERS = "/users";
	ENDPOINT_ONE_USER = "/user/:userid";

};