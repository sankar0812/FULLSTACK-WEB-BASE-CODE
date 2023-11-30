/**
 * CreatedBy   : Arun babu
 * CreatedTime : Nov 11 2023
 * Description : This file contains all the test data for login schema for Application
 **/

import { endpoints } from "../utils/endpoints";

const Endpoints = new endpoints()
export class logindata{

    LOGIN_DATA_TEST_CASE_ONE = {

        title : "TEST CASE ONE - Login with correct username and password",
        input : {
            emailaddress: "dinesh@baas360.com",
            password : "dinesh@auth"  
               },
        output:{
           url : Endpoints.URLS.LOGIN.LOGIN_IN_URL.APPLICATION_URL
        //    url : Endpoints?.URLS?.LOGIN_IN?.LOGIN_IN_URL?.LOGIN_URL1
        }
    }

    LOGIN_DATA_TEST_CASE_TWO = {
       
        title : "TEST CASE TWO - Login with incorrect username and password",
        incorrectinput : {
            emailaddress : "dinesh@baas360.com",
            password : ""
        },
        output:{
            url : Endpoints.URLS.LOGIN.LOGIN_IN_URL.APPLICATION_URL
        }
    }


    
}