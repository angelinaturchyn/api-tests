import supertest from 'supertest'
import {expect} from 'chai'
import 'dotenv/config'

describe('Auth',function (){
    it('Successful log in', function() {
     const request = supertest(process.env.BASE_URL)
        request.post('/auth')
               .send({login:process.env.LOGIN,password: process.env.PASSWORD})
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
