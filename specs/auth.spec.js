import supertest from 'supertest'
describe('Auth',function (){
    it('Successful log in', function() {
     const request = supertest('https://paysis.herokuapp.com')
        request.post('/auth')
               .send({login:'adminius',password: 'supers3cret'})
               .expect(200)
    })
})