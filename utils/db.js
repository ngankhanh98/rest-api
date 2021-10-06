const mysql = require('mysql2');
const util = require('util');
const { connection } = require('../configs/connection.config');

const createConnection = () => mysql.createConnection(connection);

module.exports = {
  get: (sql) => {
    return new Promise((resolve, reject) => {
      const connection = createConnection();
      connection.connect();
      connection.query(sql, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
      connection.end();
    });
  },
  create: (entity, table) => {
    const sql = `insert into ${table} set ?`
    return new Promise((resolve, reject) => {
      const connection = createConnection();
      connection.connect();
      connection.query(sql, entity, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
      connection.end();
    });
  },
  delete: (condition, table) => {

    const sql = `delete from ${table} where ?`
    return new Promise((resolve, reject) => {
      const connection = createConnection();
      connection.connect();
      connection.query(sql, condition, (error, results, fields) => {
        if (error) reject(error);
        resolve(results.affectedRows);
      });
      connection.end();
    });
  },
  update: async (entity, condition, table) => {
    const sql = `update ${table} set ? where ?`
    return new Promise((resolve, reject) => {
      const connection = createConnection();
      connection.connect();
      connection.query(sql, [entity, condition], (error, results, fields) => {
        if (error) reject(error);
        resolve(results.changedRows);
      });
      connection.end();
    });
  }
};