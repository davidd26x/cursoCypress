import { LoginElements } from "./pages/login/login.elements"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/')

    //Hacer click en el boton de login
    cy.get('a[data-target="#logInModal"]').click()

    //Llamada de los metodos
    LoginMethods.loginGlobal('username', 'password')
    cy.wait(5000)
  })
})