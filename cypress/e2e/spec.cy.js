import { LoginElements } from "./pages/login/login.elements";
import { LoginMethods } from "./pages/login/login.methods";

describe("template spec", () => {
  it("passes", () => {
    //Se define un usuario y password
    const usuario = "random01";
    const password = "random01";

    //Visitar la pagina de demoblaze
    cy.visit("https://demoblaze.com/");

    //Click en el boton de login
    cy.get('a[data-target="#logInModal"]').click();

    //Llamada de metodo Login
    LoginMethods.loginGlobal(usuario, password);

    //Validar que el usuario se haya logueado correctamente
    cy.get("a#nameofuser").should("contain.text", usuario);

    cy.wait(10000);

    // //Hacer click en el boton de login
    // cy.get('a[data-target="#logInModal"]').click()

    // //Llamada de los metodos
    // LoginMethods.loginGlobal('username', 'password')
    // cy.wait(5000)
  });
});
