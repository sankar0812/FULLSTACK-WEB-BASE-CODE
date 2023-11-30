/**
 * Importing all the required modules
 */
const commons = require("../../utils/commons");
const messages = require("../../utils/messages")
const baseSetup = require("../../mocks/basesetup.mock.json");

const baseSetupInternal = require("../../internals/dataaccess/basesetup.internal")



/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

const BaseSetupInternal = new baseSetupInternal();

module.exports = class baseSetupRule {


    async baseSetup(apiID, config, headers, input) {
        try {
            if (!config?.IsAvailable) {
                return Commons.generateServiceOutputForAvalibalityNotEnabled()
            }
            if (config?.IsMockEnabled) {
                return baseSetup[apiID]
            }
            else {
                let output = [];
                console.info(headers,input,BaseSetupInternal);
                return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_ADD_CUSTOMER_tms)
            }
        }
        catch (error) {
            console.log(error)
            throw Commons.generateServiceOutput(null, error.status, error.message);
        }
    }

}