document.onload = addEventListener('load',()=>{
    $('#alert').hide(1)
})
$('.sair').click(function(){
    let doc = document
    doc.location.href = '../index.html'
})
$('.sair').mousemove(function(){
    $('#alert').show(100)
})
$('.sair').mouseleave(function(){
    $('#alert').hide()
})