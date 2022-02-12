import {expect} from 'chai'
import AuthHelper from "../helpers/auth.helper";

describe('Auth',function (){
    let authHelper = new AuthHelper()


    describe('Successful log in', function() {
        before(async function() {
           await authHelper.login(process.env.LOGIN, process.env.PASSWORD)
        })

        it('Response status code is 200', function() {
                    expect(authHelper.response.statusCode).to.eq(200)

                })
        it('Response body contains token', function() {
                   expect(authHelper.response.body.token).not.to.be.undefined
        })

          })

    describe('Log in with invalid credentials',function () {

        before(async function() {
            await authHelper.login('fake', 'fake')
        })

        it('Response status code is 404', function () {
            expect(authHelper.response.statusCode).to.eq(404)
                })

        it('response body contains error message', function() {
            expect(authHelper.response.body.message).to.eq('Wrong login or password.')
        })
    })
})
