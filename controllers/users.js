const conn = require('../configuration/mySqlConnection');

exports.users = (req, res, next) => {
  let username =  req.body.username

  conn.execute('SELECT * FROM user WHERE username =?', 
  [username],
  (err, users, fields) => {
    if(err) {
      res.json({
        status : "Error",
        message: err
      })
      return
    }
    if(users.length == 0) {
      res.json({
        status : "Error",
        message: "No user found."
      })
      return
    }   
    res.json({
      status:'Successfully',
      data:users
    })
  }
)


}