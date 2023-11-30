/**
 * CreatedBy   : Arun babu
 * CreatedTime : Sep 25 2023
 * Description : This file contains all the playwright configuration
 */

import { PlaywrightTestConfig } from "@playwright/test";
/**@type {import ('@playwright/test').PlaywrightTestConfig} */
const config: PlaywrightTestConfig = {
    // reporter: 'allure-report',
    reporter:'html',
    timeout: 1000000,
    testDir: './src/tests',
    expect: {timeout: 30000},
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        baseURL: "http://qa1.baas360.alitasys.com:3000/appstore",
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
    },
};
export default config;