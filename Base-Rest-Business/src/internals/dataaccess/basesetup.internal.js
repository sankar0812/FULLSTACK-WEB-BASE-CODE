/**
 * Importing all the required modules
 */
const coreInternal = require("../core.internal");


/**
 * Initializing objects for all the imported classes
 */
const CoreInternal = new coreInternal();



module.exports = class baseSetupInternal {


    async createPriority(headers, data, filter) {
        const apiEndpoint = "/api/rest/tms/dataaccess/1.0.0/priority/v1/priority"
        const body = { data: data, filter: filter }
        const output = await CoreInternal.executeDataAccessPostAPI(apiEndpoint, headers, body)
        console.log(`CREATE CUSTOMER PAYMENT - FUNCTION EXECUTION ENDED : ${JSON.stringify(output)}`);
        return output
    }

}







