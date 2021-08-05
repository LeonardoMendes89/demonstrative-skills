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
        let sector  = document.querySelector('#sectorDb')
        let salary  = document.querySelector('#salaryDb')
        
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
            let sectorSc    = doc.querySelector('#sectorDbSC')
            let salarySc    = doc.querySelector('#salaryDbSc')

            let search      = $(this).val()
            let url = `http://localhost:3003/search/name/${search}`
            
            const config = {
                method :'GET'
            }

            fetch(url,config)
                    .then(name => name.json())
                    .then(name => {
                        name.map(e =>{
                            for(let i in search){
                                i = e.id
                                idSc.innerHTML = i
    
                                i = e.name.substring(0,15)
                                nameSc.innerHTML = i
        
                                i = e.job.substring(0,15)
                                jobSc.innerHTML = i

                                i = e.sector.substring(0,15)
                                sectorSc.innerHTML = i
                                
                                i  = e.salary
                                salarySc.innerHTML = i
                            }
                        })
                    })
                    .catch()

        }else if($(this).val() == ''){
            $('#dataStandard').show()
            $('#dataSearched').hide()
        }
    })
    $('#search').change(function(){
        if($(this).val() != ''){
            $('#dataStandard').hide()
            $('#dataSearched').show()
        
            let idSc        = doc.querySelector('#idDbSc')
            let nameSc      = doc.querySelector('#nameDbSc')
            let jobSc       = doc.querySelector('#jobDbSc')
            let sectorSc    = doc.querySelector('#sectorDbSC')
            let salarySc    = doc.querySelector('#salaryDbSc')

            let search      = $(this).val()
            let url = `http://localhost:3003/search/job/${search}`
            
            const config = {
                method :'GET'
            }

            fetch(url,config)
                    .then(job => job.json())
                    .then(job => {
                        job.map(e =>{
                            for(let i in search){
                                i = e.id
                                idSc.innerHTML = i
    
                                i = e.name.substring(0,15)
                                nameSc.innerHTML = i
        
                                i = e.job.substring(0,15)
                                jobSc.innerHTML = i

                                i = e.sector.substring(0,15)
                                sectorSc.innerHTML = i

                                i  = e.salary
                                salarySc.innerHTML = i
                            }
                        })
                    })
                    .catch()

        }else if($(this).val() == ''){
            $('#dataStandard').show()
            $('#dataSearched').hide()
        }
    })
    $('#search').change(function(){
        if($(this).val() != ''){
            $('#dataStandard').hide()
            $('#dataSearched').show()
        
            let idSc        = doc.querySelector('#idDbSc')
            let nameSc      = doc.querySelector('#nameDbSc')
            let jobSc       = doc.querySelector('#jobDbSc')
            let sectorSc    = doc.querySelector('#sectorDbSC')
            let salarySc    = doc.querySelector('#salaryDbSc')

            let search      = $(this).val()
            let url = `http://localhost:3003/search/sector/${search}`
            
            const config = {
                method :'GET'
            }

            fetch(url,config)
                    .then(sector => sector.json())
                    .then(sector => {
                        sector.map(e =>{
                            for(let i in search){
                                i = e.id
                                idSc.innerHTML = i
    
                                i = e.name.substring(0,15)
                                nameSc.innerHTML = i
        
                                i = e.job.substring(0,15)
                                jobSc.innerHTML = i

                                i = e.sector.substring(0,15)
                                sectorSc.innerHTML = i

                                i  = e.salary
                                salarySc.innerHTML = i
                            }
                        })
                    })
                    .catch()

        }else if($(this).val() == ''){
            $('#dataStandard').show()
            $('#dataSearched').hide()
        }
    })


  /**
   * problema 1:
   *    criei os endpoints de chamada de busca,
   *    porém o json chama todos os elementos buscados,
   *    entretanto a ui não renderiza todos.
   *    
        tentativa de solução:
            use filter ou foreach no lugar do map,
            ou outro método de array para ver se 
            resoluciona este problema.
   */









