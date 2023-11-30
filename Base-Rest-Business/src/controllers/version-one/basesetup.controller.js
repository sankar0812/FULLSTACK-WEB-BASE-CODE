/**
 *  Importing all the required modules
 */
const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Endpoints = new endpoints();


/* Importing all the rule classes */
const addBaseSetup = require("../../rules/baseSetup/baseSetup.rule")




/* Initializing objects for all the rule classes */
const AddBaseSetup = new addBaseSetup();


/**
 * Initializing the controller object
 */
const BaseSetupController = express.Router();   


/* Creating all the API endpoint to function mapping */


BaseSetupController.post(Endpoints.ENDPOINT_API_SETUP, async (request, response) => {
    const apiID = "tms.api.rest.business.basesetup.basesetup.v1"
    Commons.executeController(request, response, apiID, AddBaseSetup.baseSetup)
});


module.exports = BaseSetupController;
