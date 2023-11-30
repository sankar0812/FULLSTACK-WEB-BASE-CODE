/**
 * CreatedBy   : Arun babu
 * CreatedTime : Nov 11 2023
 * Description : This file contains all the endpoints for schemas
 **/

import { config } from "../../config"
const Config = new config()
export class endpoints {
    URLS = {
        LOGIN:{
        LOGIN_IN_URL:{
            LOGIN_URL1: Config.APP_STORE_INSTANCE_URL +"/signin",
            APPLICATION_URL: Config.APP_STORE_INSTANCE_URL +"/merchants/BBOS-MERCHANT-KEY/applications",  
        }

    }
}
}

 


