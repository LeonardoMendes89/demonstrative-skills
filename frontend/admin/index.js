let doc = document
doc.onload = addEventListener('load',()=>{
    sector()
    normalMode()
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
function editMode(){
    $('#edit').show(1)
    $('#normal').hide(1)
}
function normalMode(){
    $('#edit').hide(1)
    $('#normal').show(1)
} 
$('#send').click(function(){
   const id       = document.querySelector('#id').value
   const name     = document.querySelector('#name').value
   const job      = document.querySelector('#job').value
   const salary   = document.querySelector('#salary').value
   const sector   = document.querySelector('#inputGroupSelect01').value
   

   alert(id + ',' + name + ',' + job + ',' + salary + ',' + sector)
})
$('#clear').click(function(){
    const id       = document.querySelector('#id')
    const name     = document.querySelector('#name')
    const job      = document.querySelector('#job')
    const salary   = document.querySelector('#salary')
    const sector   = document.querySelector('#inputGroupSelect01')

    id.value        = ''
    name.value      = ''
    job.value       = ''
    salary.value    = ''
    sector.value    = ''
})
$('#edition').click(function(){
    editMode()
})
$('#nmode').click(function(){
    normalMode()
})


