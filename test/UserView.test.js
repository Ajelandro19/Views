const UserView=require('./../app/views/UserView')

describe('Tests for UserView',()=>{

    TextDecoderStream("Return an error objecto when try to create a new user with a null payload",()=>{
        const payload = null
        const result= UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })
})