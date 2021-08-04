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
        if($(this).val() != ''){

            $('#dataStandard').hide()
            $('#dataSearched').show()
        
            let idSc        = doc.querySelector('#idDbSc')
            let nameSc      = doc.querySelector('#nameDbSc')
            let jobSc       = doc.querySelector('#jobDbSc')
            let salarySc    = doc.querySelector('#salaryDbSC')
            let sectorSc    = doc.querySelector('#sectorDbSC')
        
            let search      = $(this).val()
        
            const url       = `http://localhost:3003`
        
            const config = {
                method :'GET'
            }
        
            fetch(url,config)
                        .then(res => res.json())
                        .then(res => {
                            res.map(e => {
                                if( 
                                    search === e.name   ||
                                    search === e.job    ||
                                    search === e.sector   ){
                                        for(let i in search){
                                                    i = e.id
                                                    idSc.innerHTML = i
                        
                                                    i = e.name
                                                    nameSc.innerHTML = i
                            
                                                    i = e.job
                                                    jobSc.innerHTML = i
                                                        
                                                    /*
                                                        gerando erro ao retornar,
                                                        provavelmento port ser um 
                                                        tipo float.

                                                    let salaryDb = e.salary
                                                    salarySc.innerHTML = salaryDb
                                                    
                                                    */
                                                
                                                    i = e.sector
                                                    sectorSc.innerHTML = i
                                                        
                                                }
                                }
                            })
                        })
                        .catch(_ => {
                            $('#noDataTable').show(100)
                        })

        }else{
            $('#dataStandard' ).show()
            $('#dataSearched' ).hide()
        }
    })












