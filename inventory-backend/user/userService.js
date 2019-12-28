var db = require('../db');

var userService = {
    getUsers: function(callback) {
        return db.query('SELECT * FROM user', callback);
    },
    authenticateUser: function ({username, password}, callback) {
        return db.query('SELECT id, username, first_name, last_name, active FROM user WHERE username = ? AND password = ? AND active = 1',
        [username, password], 
        (err,rows) => {
            if(err) callback(err, rows);
            rows[0] ? callback(err, rows[0]) : callback({message:'Unable to authenticate user'}, rows)
          });
    }
}

module.exports = userService;