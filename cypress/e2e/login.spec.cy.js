import { LoginPage } from '../src/login/loginPage.js'

const loginPage = new LoginPage 

describe('Login', () => {
  it('login com sucesso', () => {
    loginPage.loginServerest()
  })
})

