/**
 * CreatedBy   : Arun babu
 * CreatedTime : Nov 11 2023
 * Description : This file contains all the tests for login schema
 */

/**
 * Importing all the required modules
 */
import { test, expect, type Page } from '@playwright/test';
import { logindata } from '../data/login.data';
import { loginschema } from '../schemas/login.schema';

/**s
 * Initializing the objects for classes
 */
const loginData = new logindata()
test.describe('Login into the App Store Application', async () => {

    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    });

    test(loginData.LOGIN_DATA_TEST_CASE_ONE.title, async () => {
        const loginPage = new loginschema(page);

        await page.goto("/", { timeout: 30000 });

        await loginPage.login(
            loginData.LOGIN_DATA_TEST_CASE_ONE.input.emailaddress,
            loginData.LOGIN_DATA_TEST_CASE_ONE.input.password
        );

        await expect(page).toHaveURL(loginData.LOGIN_DATA_TEST_CASE_ONE.output.url);
    });
});


