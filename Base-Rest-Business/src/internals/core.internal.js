/**
* CreatedBy   : Dinesh
* CreatedTime : Dec 23 2022
* Description : This file contains all common functions for sms business Service
**/

/**
 * Importing all the required modules
 */
const axios = require("axios")
const config = require("../../config");
const commons = require("../utils/commons");

/**
 * Initializing objects for all the imported classes
 */
const Config = new config();
const Commons = new commons()


module.exports = class coreInternal {

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Feb 25 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Feb 25 2022
	* Description  : This function executes rest API with post method
	**/
	async executeDataAccessPostAPI(endpoint, headers, body) {
		try {
			const url = Config.SERVICE_REMOTE["Tms-REST-DATA-ACCESS"].REMOTE_SERVICE_URL + endpoint
			const config = {
				auth: {
					username: Config.SERVICE_REMOTE["Tms-REST-DATA-ACCESS"].REMOTE_SERVICE_AUTH_USERNAME,
					password: Config.SERVICE_REMOTE["Tms-REST-DATA-ACCESS"].REMOTE_SERVICE_AUTH_PASSWORD
				},
				headers: {

				}
			}
			const response = await axios.post(url, body, config)
			let output = response.data
			return Commons.generateServiceOutput(output.outputResponse, output.serviceResponse.status, output.serviceResponse.message)
		}
		catch (error) {
			console.error(error)
			if (error.response.data.outputResponse == undefined || error.response.data.serviceResponse == undefined) {
				throw Commons.generateServiceOutput(null, 500, error.message)
			}
			// This will be executed when remote service gives the output response in standard format
			let output = error.response.data
			throw Commons.generateServiceOutput(output.outputResponse, output.serviceResponse.status, output.serviceResponse.message)
		}
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Feb 25 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Feb 25 2022
	* Description  : This function executes rest API with post method
	**/
	async executeDataAccessPatchAPI(endpoint, headers, body) {
		try {
			const url = Config.SERVICE_REMOTE["Tms-REST-DATA-ACCESS"].REMOTE_SERVICE_URL + endpoint
			const config = {
				auth: {
					username: Config.SERVICE_REMOTE["Tms-REST-DATA-ACCESS"].REMOTE_SERVICE_AUTH_USERNAME,
					password: Config.SERVICE_REMOTE["Tms-REST-DATA-ACCESS"].REMOTE_SERVICE_AUTH_PASSWORD
				},
				headers: {

				}
			}
			const response = await axios.patch(url, body, config)

			let output = response.data
			return Commons.generateServiceOutput(output.outputResponse, output.serviceResponse.status, output.serviceResponse.message)
		}
		catch (error) {
			console.error(error)
			if (error.response == undefined) {
				throw Commons.generateServiceOutput(null, 500, error.message)
			}
			let output = error.response.data
			throw Commons.generateServiceOutput(output.outputResponse, output.serviceResponse.status, output.serviceResponse.message)
		}

	}
};