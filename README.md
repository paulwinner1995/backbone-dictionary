# Backbone-Dictionary

## Description
* TODO: Add description about this application. Tell about used programming technology and frameworks
## Installation guide
* TODO: Add installation guide
### FAQ: how to run application with in memory database

If you don`t want to setup PostgreSQL database on you local environment you can run application using in memory HSQL database. You have two different way to do this. You can run application with following VM option: 

     -Dspring.profiles.active=demo

or use next program argument on the command line:
    
     --spring.profiles.active=demo
     
If you specify one of these options application will start using in memory database.
    
## Request examples
* TODO: Add Rest request examples