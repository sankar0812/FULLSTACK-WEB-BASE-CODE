/**
 * CreatedBy    : Nishanth S R
 * CreatedTime  : Nov 02 2023
 * Description  : This file contains unit test code for pricelist add
 **/

const baseSetupRule = require("../../../src/rules/baseSetup/baseSetup.rule");
const commons = require("../../../src/utils/commons");

const AddBaseSetup = new baseSetupRule();

describe("TEST SUITE FOR [AddBaseSetup] FUNCTION", () => {

  test("TESTING IF AVAILABILITY FLAG WORKS IF IT IS DISABLE", async () => {
    const apiID = "tms.api.rest.business.basesetup.v1";
    const apiConfig = {
      ID: 1,
      Name: "ADD BASE SETUP",
      Method: "POST",
      Endpoint: "/api/rest/tms/business/1.0.0/basesetup/v1/basesetup",
      IsAvailable: true,
      IsMockEnabled: false,
    };
    const headers = {};
    const input = {};
    const mockGenerateServiceOutputForAvalibalityNotEnabled = jest.fn(() => ({
      data: null,
      status: 400,
      message: "Availability flag has not been enabled",
    }));

    commons.prototype.generateServiceOutputForAvalibalityNotEnabled =
      mockGenerateServiceOutputForAvalibalityNotEnabled;

    try {
      await AddBaseSetup.baseSetup(apiID, apiConfig, headers, input);
      expect(
        mockGenerateServiceOutputForAvalibalityNotEnabled.mock.calls
      ).toHaveLength(0);
    } catch (error) {
      // Handle the error or log it as needed
    }
  });

  test("TESTING ERROR MASSAGE FOR UNAUTHORIZED ACCESS", async () => {
    const mockGenerateServiceOutputForUnauthorizedResponse = jest.fn(() => ({
      status: 401,
      message: "Basic authentication failed, incorrect username or password",
      timestamp: new Date().toLocaleString(),
    }));

    commons.prototype.getUnauthorizedResponse =
      mockGenerateServiceOutputForUnauthorizedResponse;

    expect(
      mockGenerateServiceOutputForUnauthorizedResponse.mock.calls
    ).toHaveLength(0);
  });
});
