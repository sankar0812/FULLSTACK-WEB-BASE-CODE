/**
* CreatedBy    : Dinesh
* CreatedTime  : July 29 2023
* Description  : This file is the entry point for the service
**/

/**
 * Importing all the required modules
 */
const config = require("./config");

const messages = require("./src/utils/messages");

const RestBusiness = require("./server");
/**
 * Initializing objects from the imported classes
 */
const Config = new config();
const Messages = new messages();



/**
 * Starting the service based on the security configuration
 */

RestBusiness.listen(Config.SERVICE_PORT);
console.log(Messages.MESSAGE_SERVICE_RUNNING_SUCESSFULLY + ` {${Config.SERVICE_HOST}` + ":" + `${Config.SERVICE_PORT}} `);