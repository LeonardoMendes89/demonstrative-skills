let knex = require('./knex') 


module.exports =  people => {
     let user :string = ''
     let pass :string = ''

     //user:string, pass:string

     let validate = () :void => {
          let authenticate = knex.select('*')
                                 .table('demo_auth')
                                 .then(res => console.log(res))
                                 .catch(err => console.log(err))
     } 
}
