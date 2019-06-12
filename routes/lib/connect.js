
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L@bwke405;",
  database: 'LSA'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

function execQuery(querystring, res) {
  connection.query(querystring, function (err, rows, fields) {
    if (err) { throw err; }
    else {
      res.send(rows[0]);
    }
  });
};

module.exports = {
  get: function getData(name, res) {
    querystring = `select * from Users where Name = '${name}' ; `;
    execQuery(querystring, res);
  },
  post:function insertData(name, tel, res) {
    querystring = `CALL adduser('${name}','${tel}'); `
    execQuery(querystring, res);
  },
  delete: function deleteData(name, res) {
    querystring = `CALL deleteuser('${name}'); `
    execQuery(querystring, res);
  },
  put: function updateData(name, tel, res) {
    querystring = `CALL updateuser('${name}','${tel}'); `
    execQuery(querystring, res);
  }
};