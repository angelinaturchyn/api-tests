import  {expect} from 'chai'
import UsersHelper from '../helpers/users.helpers'


describe('Transactions', function() {

    let userHelper = new UsersHelper()
    let firstUserId
    let secondUserId

    before(async function (){
        await userHelper.create()
        await userHelper.create()
        firstUserId = userHelper.response.body.id
        secondUserId = userHelper.response.body.id
        console.log(firstUserId )
        console.log(secondUserId )

    })

  describe('Create Transaction', function() {

      before(async function() {
          await userHelper.getByID(firstUserId)
          await userHelper.getByID(secondUserId)
      })

      it('response body contains list of 2 or more user id', function() {
          expect((userHelper.response.body).id).not.to.be.undefined
      })

      it('response body array item contains initial amount', function() {
          expect((userHelper.response.body).amount).not.to.be.undefined
      })



  })

})
