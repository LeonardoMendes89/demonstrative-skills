
module.exports = app => {
    app.post('/insert',app.api.postPeople.insertData)
    app.get('/',app.api.getPeople.getData)
    app.get('/:id',app.api.getByIdPeople.getData)
    app.get('/search',app.api.getPeopleByQuery.getByQueryData)
    app.put('/update/:id',app.api.putPeople.updateData)
    app.delete('/delete/:id',app.api.deletePeople.deleteData)
}