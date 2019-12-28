var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'inventory.cyeqtwmo7agm.eu-west-2.rds.amazonaws.com',
    user     : 'root',
    password : 'mynameisroot',
    database : 'inventory'
});
module.exports=connection;