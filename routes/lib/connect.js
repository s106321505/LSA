const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database.db'
});

var querystring = '';

function execQuery(querystring) {
    sequelize.query(querystring,
        { replacements: { status: ['active', 'inactive'] }, type: sequelize.QueryTypes.SELECT }
    ).then(function (dateset) {
        console.log(dateset);
    });
}


module.exports = {
    get: function getData(name) {
        querystring = `select * from User where Name = '${name}' ; `
        execQuery(querystring)
    },
    post:function insertData(name, age) {
        querystring = `inset into User (Name, Age) select '${name}', ${age} ; `
        execQuery(querystring);
    }, 
    delete:function deleteData(name) {
        querystring = `delete from User where Name = '${name}' ; `
        execQuery(querystring);
    }
}