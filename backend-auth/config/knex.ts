const file =require('../knexfile.js') 
const knex = require('knex')(file)

module.exports = knex