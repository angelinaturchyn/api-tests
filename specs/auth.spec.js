import supertest from 'supertest'
import {expect} from 'chai'

describe('Auth',function (){
    it('Successful log in', function() {
     const request = supertest('https://paysis.herokuapp.com')
        request.post('/auth')
               .send({login:'adminius',password: 'supers3cret'})
               .end(function (err,res) {
                   expect(res.statusCode).to.eq(200)
                   expect(res.body.token).not.be.undefined
               })
    })

    it.only('Log in with invalid credentials', function() {
        const request = supertest('https://paysis.herokuapp.com')
        request.post('/auth')
            .send({login:'invalid',password: 'invalid'})
            .end(function (err,res) {
                expect(res.statusCode).to.eq(404)
                expect(res.body.token).to.eq('Wrong login or password.')
            })
    })
})