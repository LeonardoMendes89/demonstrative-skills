import knex from './knex.js'

export default function authenticate() {
    
    interface User {
        id?      :number;
        user     :string;
        password :string;
    }

    let authUser = knex<User>('auth')
                       .select('*')
                       .then(resp => resp)
                       .catch(err => err)
}

