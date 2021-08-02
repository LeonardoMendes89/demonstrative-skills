let doc = document
doc.onload = addEventListener('load',()=>{
    sector()
})
doc.onclick = addEventListener('click',e => e.preventDefault())
$('#homeArea').click(function(){
   doc.location.href = '../web/index.html'
})
function sector(){
    const url = 'category.json'
    const select = document.querySelector('#inputGroupSelect01')

    fetch(url)
        .then(res => res.json())
        .then(res => {
            res.map(e => {
                let category = e.category
                let option   = document.createElement('option')
                
                option.append(category)
                select.append(option)
            })
        })
        .catch(err => console.log(err))
}
$('#send').click(function(){
   alert('sending ...')
})
