/*const knex = require('./knex')

let conConsole = {
    data :() => 
         {
            knex.select('*').table('tests')    
                .then(test => console.log(test))
                .catch(err => console.log(err))
            }
}
let con = {
    data :() => 
         {
            knex.select('*').table('tests')    
                .then(test => test).catch(err => err)
            }
}
let getDataConsole = conConsole.data() 
let getData        = con.data()

return {    getDataConsole, getData    }

module.exports =  getData*/

