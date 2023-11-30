/**
* CreatedBy    : Dinesh
* CreatedTime  : July 29 2023
* ModifiedBy   : Dinesh 
* ModifiedTime : July 29 2023
* Description : This file contains all common functions for business Service
**/

/**
 * Importing all the required modules
 */
const messages = require("../utils/messages");
const apiConfig = require("../../api.config.json");


/**
 * Initializing objects for all the imported classes
 */
const Messages = new messages();


module.exports = class commons {

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 04 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 04 2022
	* Description  : This function gets the current datetime
	**/
	async getCurrentDateTime() {
		try {
			return new Date().toISOString();
		} catch (error) {
			console.log(error);
		}
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Nov 18 2022
	* Description  : This function handles unauthorized response
	* (NOTE : Tried reusing the generateControllerOutput function to generate the statandard api response it does not work 
	*  for some reason, so have implemented it like this)
	**/
	getUnauthorizedResponse(request) {
		let output = {
			outputResponse: null,
			serviceResponse: {
				status: 401,
				message: Messages.MESSAGE_BASIC_AUTH_FAILED,
				timestamp: new Date().toLocaleString(),
				endpoint: request.originalUrl
			}
		};
		return output
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 23 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 23 2022
	* Description  : This function generates service response object for all APIs
	**/
	generateControllerOutput(response, data, status, message, endpoint) {
		let output = {
			outputResponse: data,
			serviceResponse: {
				status: status,
				message: message,
				timestamp: new Date().toLocaleString(),
				endpoint: endpoint
			}
		};
		if (response === null) {
			return output;
		} else {
			response.status(status);
			return output;
		}
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 23 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 23 2022
	* Description  : This function generates service response o
	**/
	generateServiceOutput(data, status, message) {
		let output = {
			data: data,
			status: status,
			message: message
		};
		return output
		
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 23 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 23 2022
	* Description  : This function generates service response o
	**/
	generateServiceOutputForAvalibalityNotEnabled() {
		let output = this.generateServiceOutput(null, 400, Messages.MESSAGE_AVAILABILITY_NOT_ENABLED);
		return output
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 26 2022
	* Description  : This function validates the request headers for all the APIs
	**/
	validateRequestHeaders(merchantKey, tenantKey, authKey, contactPersonKey, applicationKey, instanceKey) {
		if (
			typeof merchantKey === "undefined" || 
			typeof tenantKey === "undefined" || 
			typeof authKey === "undefined" || 
			typeof contactPersonKey === "undefined" || 
			typeof applicationKey === "undefined" || 
			typeof instanceKey === "undefined" || 

			!merchantKey || !tenantKey || !authKey || !contactPersonKey || !applicationKey || !instanceKey) {

			let output = this.generateServiceOutput(null, 400, Messages.MESSAGE_MISSING_REQUEST_HEADER);
			throw output
		}
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 26 2022
	* Description  : This function executes controller functions
	**/
	async executeController(request, response, apiID, ruleFunction) {
		let executionStartTime = null; let executionEndTime = null; let ruleOutput = null;
		try {
			executionStartTime = await this.getCurrentDateTime();
			console.log(`${apiConfig[apiID].Name} API EXECUTION STARTS AT (${executionStartTime})`);
			
			const merchatKey = request.headers.merchantkey; const tenantKey = request.headers.tenantkey; 
			const authKey = request.headers.authkey; const contactPersonKey = request.headers.contactpersonkey;
			const applicationKey = request.headers.applicationkey; const instanceKey = request.headers.instancekey;

			this.validateRequestHeaders(merchatKey, tenantKey, authKey, contactPersonKey, applicationKey, instanceKey);
			ruleOutput = await ruleFunction(apiID, apiConfig[apiID], request.headers, request.body);
			console.log(`${apiConfig[apiID].Name} RULE OUTPUT : (${ruleOutput})`);
		
			const controllerOutput = this.generateControllerOutput(response, ruleOutput.data, ruleOutput.status, ruleOutput.message, request.originalUrl);
			response.json(controllerOutput);

			executionEndTime = await this.getCurrentDateTime();
			console.log(`${apiConfig[apiID].Name} API EXECUTION ENDS AT (${executionEndTime})`);
			console.info({
				requestURL: request.originalUrl,
				requestMethod: request.method,
				requestHeaders: request.headers,
				requestBody: JSON.stringify(request.body),
				responseBody: JSON.stringify(controllerOutput),
				executionStartTime: executionStartTime,
				executionEndTime: executionEndTime
			});
		} catch (error) {
			if (error.status == null) {
                let controllerOutput = this.generateControllerOutput(response, null, 500, error.message, request.originalUrl);
                response.json(controllerOutput);
            }
			
			let controllerOutput = this.generateControllerOutput(response, error.output ? error.data : null, error.status, error.message, request.originalUrl);
			response.json(controllerOutput);
			
			executionEndTime = await this.getCurrentDateTime();
			console.error({
				requestURL: request.originalUrl,
				requestMethod: request.method,
				requestHeaders: request.headers,
				requestBody: JSON.stringify(request.body),
				responseBody: JSON.stringify(controllerOutput),
				executionStartTime: executionStartTime,
				executionEndTime: executionEndTime
			});
		}
	}

};