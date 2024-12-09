import { RegisterPage } from '../src/register/registerPage.js'

const registerPage = new RegisterPage 

describe('Cadastro', () => {
  it('cadastro com sucesso', () => {
    registerPage.registerServerest()
  })
})

