var Sequelize = require('sequelize');

var sql = new Sequelize('TEST', 'sa', 'netsucesso', {
            host: '192.168.140.229',
            dialect: 'mssql',
            pool: {
              max: 5,
              min: 0,
              idle: 10000
          }
        });
        
        sql.authenticate();