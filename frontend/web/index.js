let doc = document
document.onload = addEventListener('load',()=>{
    $('#alert').hide(1)
    dataTable()
})
$('.sair').click(function(){
    doc.location.href = '../index.html'
})
$('.sair').mousemove(function(){
    $('#alert').show(100)
})
$('.sair').mouseleave(function(){
    $('#alert').hide()
})
$('#admArea').click(function(){
    doc.location.href = '../admin/index.html'
})
function dataTable(){
    let id      = document.querySelector('#idDb')
    let name    = document.querySelector('#nameDb')
    let job     = document.querySelector('#jobDb')
    let salary  = document.querySelector('#salaryDb')
    let sector  = document.querySelector('#sectorDb')
    
    const url = 'http://localhost:3003'

    const config = {
        method :'GET'
    }

    fetch(url,config)
                .then(res => res.json())
                .then(res => {
                    res.map(e => {

                        let idDb = e.id
                        let ulId = doc.createElement('ul')
                        ulId.append(idDb)
                        id.append(ulId)

                         let nameDb = e.name.substring(0,15)
                         let ulName = doc.createElement('ul')
                         ulName.append(nameDb)
                         name.append(ulName)

                         let jobDb = e.job.substring(0,15)
                         let ulJob = doc.createElement('ul')
                         ulJob.append(jobDb)
                         job.append(ulJob)

                         let salaryDb = e.salary
                         let ulSalary = doc.createElement('ul')
                         ulSalary.append(salaryDb)
                         salary.append(ulSalary)

                         let sectorDb = e.sector
                         let ulSector = doc.createElement('ul')
                         ulSector.append(sectorDb)
                         sector.append(ulSector)
                    })
                })
                .catch(err => console.log(err))
}