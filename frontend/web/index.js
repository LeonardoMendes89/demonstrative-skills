let doc = document
doc.onload  = addEventListener('load',()=>{
    $('#alert').hide(1)
    $('#noDataTable').hide(1)
    $('#dataSearched').hide(1)
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
                .catch(_ => {
                    $('#noDataTable').show(100)
                })
}
$('#search').change(function(){
    
    $('#dataStandard').hide()
    $('#dataSearched').show()

    let idSc        = document.querySelector('#idDbSc')
    let nameSc      = document.querySelector('#nameDbSc')
    let jobSc       = document.querySelector('#jobDbSc')
    let salarySc    = document.querySelector('#salaryDbSC')
    let sectorSc    = document.querySelector('#sectorDbSC')

    let search  = document.querySelector('#search').value

    const url = `http://localhost:3003`

    const config = {
        method :'GET'
    }

    fetch(url,config)
                .then(res => res.json())
                .then(res => {
                    res.map(e => {

                        if( search == e.id     ||
                            search == e.name   ||
                            search == e.job    ||
                            search == e.salary ||
                            search == e.sector   ){

                            let idDb = e.id
                            //let ulId = doc.createElement('ul')
                            //ulId.append(idDb)
                            //idSc.innerHTML = ulId
                            console.log(idDb)

                            let nameDb = e.name
                            //let ulName = doc.createElement('ul')
                            //ulName.append(nameDb)
                            //nameSc.innerHTML = nameDb
                            console.log(nameDb)
    
                            let jobDb = e.job
                            //let ulJob = doc.createElement('ul')
                            //ulJob.append(jobDb)
                            //job.innerHTML = ulJob
                            console.log(jobDb)
    
                            let salaryDb = e.salary
                             //let ulSalary = doc.createElement('ul')
                             //ulSalary.append(salaryDb)
                             // salary.innerHTML = ulSalary
                            console.log(salaryDb)
    
                            let sectorDb = e.sector
                            //let ulSector = doc.createElement('ul')
                            //ulSector.append(sectorDb)
                            //sector.innerHTML = ulSector*/
                            console.log(sectorDb)

                        }else{
                            console.log('user not found!')
                        }
                    })
                })
                .catch(_ => {
                    $('#noDataTable').show(100)
                })
})
/**
 * criar um metodo para caso o usuário,
 * não seja achado, ele devolva um card que ao
 * clicar, lança este evento:
 * doc.location.reload() e recarrega a página
 * 
 * 
 * criar um outro evento para caso valor o input
 * seja == '' ao mudar ele recarrega a página.
 */


/**
 * 
 * 
 * 
 * 
 * 
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

                         $('#dataStandard').hide(1)* 
 * 
 * 












 */