
let doc = document
let area = doc.querySelector('.area')
doc.onload = addEventListener('click',(e) =>{
  e.preventDefault()
})

function callName(){ 
    let name   = doc.querySelector('.name')
    let nameBt = doc.querySelector('#name')
 
    nameBt.addEventListener('click', ()=>{
      const url  = `http://localhost:3009/name/${name.value}`

      const config = {
            method :'GET'
      } 

      fetch(url,config).then(name => name.json())
                       .then(name => {
                          name.map(name =>{
                             
                              let idTst  = '[' + name.id       + ','
                              area.append(idTst)

                              let nameTst = name.name    + ','
                              area.append(nameTst)

                              let emailTst  = name.email + ','
                              area.append(emailTst)

                              let loginTst  = name.login + ']'
                              area.append(loginTst)
                          })
                       })
                       .catch(err => console.log(err))
    })
}
callName()

function callEmail(){
  let email = doc.querySelector('.email')
  doc.querySelector('#email').addEventListener('click',()=>{
       const url  = `http://localhost:3009/test/email?email=${email.value}`
      
        const config = {
              method :'GET'
        }    

        fetch(url,config).then(email => email.json())
                         .then(email =>{
                           email.map(email =>{
                              let emailId = email.id
                              area.append(emailId)

                              let emailName = email.name
                              area.append(emailName)

                              let emailEmail = email.email
                              area.append(emailEmail)

                              let emailLogin = email.login
                              area.append(emailLogin)
                           })
                         })
                         .catch()
  })
}
callEmail()

function callLogin(){
  let login = doc.querySelector('.login')
  doc.querySelector('#login').addEventListener('click',()=>{
         let loginBt = login.value
         area.innerHTML = loginBt
  })
}
callLogin()

function refresh(){
  doc.querySelector('#refresh').addEventListener('click',()=>{
        doc.location.reload()
  })
}
refresh()