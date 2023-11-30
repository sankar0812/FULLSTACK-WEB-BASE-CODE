# Rest Data Access [ Base-Data-Access ]  
This layer interacts with the database layer and gets the input from either GateWay or Rest Business layer.
# Rest Business    [ Base-Rest-Business ] 
This layer contains the business validations or custom setup api and gets the input from GateWay and passes to the Data Access layer.
# GateWay          [ Base-GateWay ] 
This layer gets the input from the WebClient and passes according to the request to Rest Data Access or Rest Business.
# Web Client       [ Base-Web-Client  ]
This layer is the presentation layer of the application and interacts with user. It gets the request from client and passes to the GateWay.
# Web Automation   [ Base-Web-Automation ]
This code is to test the WebClient layer of the application it is an automatic testing using playWright framework.