# Application Service 
Gateway Layer

# Description
This layer is the connectig layer between the WebClient to Data Access or Rest Business. In this layer we have configured all the endpoints of the CRUD operation to the tables.

# Version
Current version is 1.0.0

# Tools
```
Node – V18.16.0 
Microsoft Visual Studio Code – V1.83.1 
Postman – V10.19.7 
```
 
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

 To run the application run the following command
```yml
npm start
```

To build the application use the following command
```yml
npm run build
```

# Config
The 'gateway.config.yml' file contains the url and endpoints of both Data-Access-Layer and Business-Layer

# Dependencies
This layer input is get from WebClient and it passes the request to the Data Access layer or Rest Business layer.
So, that we need to run the Data Access and Rest Business for this layer.