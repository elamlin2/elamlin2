var path = require('path'),    
rootPath = path.normalize(__dirname + '/..'),    
//will use the development or production config 
env = process.env.NODE_ENV || 'development';

var config = {  
development: {    
            root: rootPath,    
            app: {      name: ' ToDo'    },    
            port: 5000,  
 },  
 production: {    
              root: rootPath,    
              app: {      name: ' ToDo'    },    
               port: 80,  }
  };
//exports the config
module.exports = config[env];
