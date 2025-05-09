import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
  //Metodos que naveguen a la página
  static navigateToDemoBlaze() {
    cy.clearCookies();
    cy.visit(CommonPageData.url);
  }

  static clickOnHomeOption() {
    //Al hacer click en la seccion Home del Menú de arriba
    CommonPageElements.topMenu.home.click();
  }

  static clickOnContactOption() {
    //Al hacer click en la seccion Contact del Menú de arriba
    CommonPageElements.topMenu.contact.click();
  }

  static clickOnAboutUsOption() {
    //Al hacer click en la seccion About Us del Menú de arriba
    CommonPageElements.topMenu.aboutUs.click();
  }

  static clickOnCartOption() {
    //Al hacer click en la seccion Cart del Menú de arriba
    CommonPageElements.topMenu.cart.click();
  }

  static clickOnLogInOption() {
    //Al hacer click en la seccion Log In del Menú de arriba
    CommonPageElements.topMenu.logIn.click();
  }

  static clickOnSignUpOption() {
    //Al hacer click en la seccion Sign Up del Menú de arriba
    CommonPageElements.topMenu.signUp.click();
  }

  //Nuevo metodo de arrojar alertas
  static verifyAlert(expectedMessage) {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(expectedMessage);
    });
  }
}
