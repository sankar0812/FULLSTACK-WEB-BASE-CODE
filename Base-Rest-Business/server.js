/**
* CreatedBy    : Dinesh
* CreatedTime  : March 07 2023
* ModifiedBy   : Ayerathammal
* ModifiedTime : OCT 06 2023
* Description  : This file is the entry point for the service
**/

/**
 * Importing all the required modules 
 */
const cors = require("cors");
const compression = require("compression");
const basicAuth = require("express-basic-auth");

const express = require("express");
const config = require("./config");

const commons = require("./src/utils/commons");
const endpoints = require("./src/utils/endpoints");

/**
 * Initializing objects from the imported classes
 */
const RestBusiness = express();
const Config = new config();
const Commons = new commons();
const Endpoints = new endpoints();

/**
 * Adding middlewares to the express object
 */
RestBusiness.use(cors());
RestBusiness.use(compression());
RestBusiness.use(express.json());

/**
 * Adding get service info endpoint without any authentication
 */
RestBusiness.get(Endpoints.ENDPOINT_BASE_URL, async (request, response) => {
    let executionStartTime = null; let executionEndTime = null;
    try {
        executionStartTime = await Commons.getCurrentDateTime();
        console.log(`GET SERVICE INFO API EXECUTION STARTS AT (${executionStartTime})`);

        const output = ({
            serviceName: Config.SERVICE_NAME,
            serviceHost: Config.SERVICE_HOST,
            servicePort: Config.SERVICE_PORT,
            // eslint-disable-next-line no-undef
            serviceUpTime: `${process.uptime()} sec(s)`
        });
        response.json(output);

        executionEndTime = await Commons.getCurrentDateTime();
        console.info({
            requestURL: request.originalUrl,
            requestHeaders: request.headers,
            requestBody: request.body,
            responseBody: output,
            executionStartTime: executionStartTime,
            executionEndTime: executionEndTime
        });
        console.log(`GET SERVICE INFO API EXECUTION ENDS AT (${executionEndTime})`);
    }
    catch (error) {
        executionEndTime = await Commons.getCurrentDateTime();
        console.error({
            requestURL: request.originalUrl,
            requestMethod: request.method,
            requestHeaders: request.headers,
            requestBody: request.body,
            responseBody: error,
            executionStartTime: executionStartTime,
            executionEndTime: executionEndTime
        });
    }
});

/**
 * Adding basic authentication middleware based on configuration
 */
RestBusiness.use(basicAuth({ users: { [Config.SERVICE_AUTH.AUTH_USERNAME]: Config.SERVICE_AUTH.AUTH_PASSWORD }, unauthorizedResponse: Commons.getUnauthorizedResponse }));

/* Importing all the controller classes */
const BaseSetupControllerVersionOne = require("./src/controllers/version-one/basesetup.controller")

/* Inject the endpoints to the respective controller modules */
RestBusiness.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_BASE + Endpoints.ENDPOINT_VERSION_1, BaseSetupControllerVersionOne)

module.exports = RestBusiness;

