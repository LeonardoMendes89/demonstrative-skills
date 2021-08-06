
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
                             
                              let idTst = name.id
                              let ulId  = doc.createElement('ul')
                              ulId.append(idTst)
                              area.append(ulId)

                              /*let nameTst = name.name
                              area.append(nameTst)

                              let emailTst  = name.email
                              area.append(emailTst)

                              let loginTst  = name.login
                              area.append(loginTst)*/
                          })
                       })
                       .catch(err => console.log(err))
    })
}
callName()

function callEmail(){
  let email = doc.querySelector('.email')
  doc.querySelector('#email').addEventListener('click',()=>{
         let emailData = email.value
         area.innerHTML = emailData
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