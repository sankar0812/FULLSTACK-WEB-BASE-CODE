# Application  Service Name
Web Automation layer (testing)

# Version
1.0.0

# Description
This code is for the automation testing for the TMS application. This code will test the search task feature.

# Tools
```
Node – V18.16.0 
Microsoft Visual Studio Code – V1.83.1 
```

# Commands

To install the required NPM packages run the following command
```yml
npm install
```
To install playwright
```yml
npm init playwright@latest
```

To run the service run the following command
```yml
npm test [test filename] - npm test search.test.ts 
```

# Run Test File Repeatedly
1. npx playwright test tests/todo-page/ tests/landing-page/ --repeat-each=5
# File and Folder Structure
1. All the file and folder format should create by a lowercase
2. File creation based on the folder name extension as suffix with filename -- (eg:login.data.ts)
3. Create a config file for Application instance URL
# Endpoint Based on config
1. Endpoint call from the config file the then add routing URL
# Constanst file purpose
1. Use this file for overall const variable usages
# Generate Allure Report
1. Use this Command to Open the allure report after run test
   -- npx allure open allure-report
# Run With multiple Browser
1. Use this Command line for the different browser tes for a file
   -- npx playwright test form.spec.js --browser=all
   
# Dependencies
This layer will test the WebClient so that we need to run the WebClient for data purpose we need to run all other layers GateWay , Data Access and DataBase.