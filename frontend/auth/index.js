document.onclick = addEventListener('click',(e)=> e.preventDefault())
document.onload  = addEventListener('load', ( )=>{
    $('#alerting').hide(1)
    $('#empty').hide(1)
})  
$('#button').click(function(){
    let admInput  = document.querySelector('#admin')
    let passInput = document.querySelector('#pass')

    let adm  = 'mendes'
    let pass = '1234'

    if(
            admInput.value  === ''
        ||
            passInput.value === ''
    ){
        $('#empty').show(100)
    }else if(
            admInput.value  != adm
        &&
            passInput.value != pass
    ){
        $('#alerting').show(100) 
    }else if(
             admInput.value  === adm
        &&
            passInput.value  === pass
    ){
        document.location.href = 'web/index.html'
    }
})