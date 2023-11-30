# Application Service 
Business Layer

# Service Name

Rest Business

# Application Version

1.0.0

# Description

This layer has the Business validation or custom api to setup base data in the status, priority and severity tables.

# Tools
```Node – V18.16.0 
Microsoft Visual Studio Code – V1.83.1
pgAdmin - v7.8
postgreSQL - v16.0
Postman – V10.19.7
``` 

# Config
This file holds all the necessary connections for the Data Access Layer to operate, specifically for the Database.

# Commands
Make sure to replace the develop branch with your feature branch name
Please use this below commands to clone the code

```yml
git clone {clone-url} -b {branch-name}
```

To install the required NPM packages run the following command

```yml
npm install
```
To build the application use the following command

```yml
npm run build
```

To run the application run the following command

```yml
npm start
```

# Dependencies
This layer input is get from GateWay and it passes the request to the Data Access layer and then back to the database.
```
[Gateway-Layer]<->[Business-Layer]<->[Data-Access-Layer]<->[Database]
```
