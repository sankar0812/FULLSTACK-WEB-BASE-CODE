/*
* CreatedBy    : Dinesh
* CreatedTime  : March 07 2023
* Description  : This file contains all the configurations needed for the service
**/

module.exports = class config{

	

	// Basic information needed to bind the service with Tms
	SERVICE_KEY = "SER-KEY-006"
	SERVICE_NAME = "TMS Rest Businesss"

	// Service startup host and port (Will be discovered through Tms)
	SERVICE_HOST = "localhost"
	SERVICE_PORT = "5005"

    // Service basic authentication (Will be discovered through Tms)
	SERVICE_AUTH = {
		AUTH_USERNAME : "QP0192923232LD",
		AUTH_PASSWORD : "927NBGJJ0283HKA74782"
	}

	// Service remote configuration (Will be discovered through Tms)
	SERVICE_REMOTE = {
		/**
		 * Service crashes when it was uanble to access Tms Rest Business this need
		 * to be fixed and handled
		 */
		"TMS-REST-DATA-ACCESS" : {
			REMOTE_SERVICE_NAME : "TMS Data Access Layer",
			REMOTE_SERVICE_URL  : "http://localhost:3000",
			REMOTE_SERVICE_AUTH_API_KEY : "0232KLa123cse23423",
			REMOTE_SERVICE_AUTH_USERNAME : "QP0192923232LD",
			REMOTE_SERVICE_AUTH_PASSWORD : "927NBGJJ0283HKA74782",
		}
	}

	// Service connector configuration (Will be discovered through Tms)
	// This configuration is not used and will be removed in the future
	SERVICE_CONNECTOR = {
		KEYCLOAK : {
			CONNECTOR_URL : "https://sso.alitasys.com:8443",
			CONNECTOR_REGISTRY : {
				/**
				 * Signin based on keycloak is now bound to one keycloak realm
				 * this implementation need to be changed in the future to support different realms
				 * for different instances at runtime (COMMENTED BY : Dinesh on March 16 2023)
				 */
				KEYCLOAK_REALM : "Dms-Dev-Realm" ,
				KEYCLOAK_CLIENT_ID : "test",
				KEYCLOAK_CLIENT_SECRET : "a0703e11-815b-460f-9d98-6a684d4fa573"
			}
		}
	}

};