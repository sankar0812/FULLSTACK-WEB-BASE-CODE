module.exports = class endpoints {

	// Auth endpoint of the REST service
	ENDPOINT_BASE_URL = "/api/rest/tms/business";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_MODULES */
	ENDPOINT_MODULE_BASE = "/1.0.0/basesetup"

	// Endpoint versions for the REST Service
	ENDPOINT_VERSION_1 = "/v1";
	ENDPOINT_VERSION_2 = "/v2";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_FUNCTIONALIES */
	ENDPOINT_API_SETUP = "/basesetup"
};