let doc = document
doc.onload = addEventListener('loa',()=>{
    const url = 'category.json'

    const config = {
        method:'GET'
    }

    fetch(url).then(res => console.log(res.json()))
})
doc.onclick = addEventListener('click',e => e.preventDefault())
$('#homeArea').click(function(){
   doc.location.href = '../web/index.html'
})
