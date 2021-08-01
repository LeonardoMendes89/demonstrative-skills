let doc = document
doc.onload = addEventListener('load',()=>{
    const url = 'category.json'
    teste()
})
doc.onclick = addEventListener('click',e => e.preventDefault())
$('#homeArea').click(function(){
   doc.location.href = '../web/index.html'
})
function teste(){
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
        .catch(err => err)
}
