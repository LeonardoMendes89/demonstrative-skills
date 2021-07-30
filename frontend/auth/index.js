document.onclick = addEventListener('click',(e) => e.preventDefault())
document.onload = addEventListener('load',()=>{
    $('#alerting').hide(1)
    $('#empty').hide(1)
})  
$('#button').click(function(){
    document.location.href = 'web/index.html'
})