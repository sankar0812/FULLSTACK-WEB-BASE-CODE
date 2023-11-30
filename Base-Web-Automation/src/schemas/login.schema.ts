/**
 * CreatedBy   : Arun babu
 * CreatedTime : Nov 11 2023
 * Description : This file contains functions to handle events in login schema 
 */

import { Page,expect } from '@playwright/test';
import { endpoints } from '../utils/endpoints';

/** declare object variables */
const Endpoints = new endpoints()

export class loginschema {

    readonly page: Page;

    constructor(page: Page) {this.page = page}

    async login(emailaddress: string, password: string ) {
        await this.page.goto('http://qa1.baas360.alitasys.com:3000/appstore/signin');
        // await this.page.goto('http://dev1.baas360.alitasys.com:3000/appstore/signin');
        await this.page.getByLabel('Email Address').click();
        // Click the Email address Input box
        await this.page.getByLabel('Email Address').fill(emailaddress);
        // Enter the Username in the Inputbox
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByLabel('Password').click();
        // Click on the Password input field
        await this.page.getByLabel('Password').fill(password);
        // Fill the Password in the Inputbox
        await this.page.getByRole('button', { name: 'Sign In' }).click();
        // Click the Sign in button
        await this.page.waitForTimeout(3000);
        // Wait some time after click on the Sign in button
    }
}