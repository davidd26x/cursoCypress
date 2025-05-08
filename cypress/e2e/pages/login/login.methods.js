import { LoginElements } from "./login.elements";

//Se usa el invoke en vez del type para evitar el delay de escritura y que se completen los campos correctamente
export class LoginMethods{
    static insertarUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertarPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
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