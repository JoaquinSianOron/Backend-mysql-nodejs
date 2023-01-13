const mysql = require ('mysql2');
const {promisify} = require('util');
const {database} = require('../../key')

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code === 'protocol_connection_lost'){
            console.error('database connection was closed');
        }
        if(err.code === 'er_con_cout_err'){
            console.error('database has to many connections');
        }
        if(err.code === 'econnrefused'){
            console.error('database aconnectionwas refused');
        }
    }
    if(connection) connection.release();
    console.log('DB is conected');
    return;

});

pool.query = promisify(pool.query);

module.exports = pool;
