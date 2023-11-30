/**
* CreatedBy   : Dinesh
* CreatedTime : Dec 23 2022
* Description : This file contains create operation releated functions for user schema
**/


/**
 * Importing all the required modules
 */
const { Prisma } = require("@prisma/client");
const commons = require("../../utils/commons");
const messages = require("../../utils/messages");

const userMock = require("../../mocks/user.mock.json");


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();


module.exports = class createUserService {

	/**
	* CreatedBy    : Nishanth S R
	* CreatedTime  : Oct 27 2023
	* Description  : This function stores a record in user table
	**/
	async createOneUser(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return userMock[apiID] }
			else {
				let duplicateRecord = await databaseConnector.User.findMany({
					where: input.filter || "null",
					select: { UserID: true }
				}).catch((error) => {
					if (error instanceof Prisma.PrismaClientValidationError) {
						throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
					} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
						throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
					} else {
						throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
					}
				});

				var filters = input.filter

				if (duplicateRecord.length === 0 || Object.keys(filters).length === 0) {

					let output = await databaseConnector.User.create({
						data: input.data,
					}).catch((error) => {
						if (error instanceof Prisma.PrismaClientValidationError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else {
							throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
						}
					});
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_CREATED_SUCCESSFULLY);
				}
				else {
					throw Commons.generateServiceOutput(null, 409, Messages.MESSAGE_DUPLICATE_RECORD)
				}
			}
		} catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, error.message);
		}

	}
};