import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertarUsername(username){
        LoginElements.textboxes.username.type(username)
    }

    static insertarPassword(password){
        LoginElements.textboxes.password.type(password)
    }

    static clickLoginButton(){
        LoginElements.buttons.login.click()
    }

    //Metodo para usar login completo
    static loginGlobal(username, password){
        this.insertarUsername(username)
        this.insertarPassword(password)
        this.clickLoginButton()
    }
}