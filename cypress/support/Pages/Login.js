class Login {
  constructor() {
    this.labelUsuario = ".form-control-label:contains(Username)";
    this.campoUsuario = "#loginusername";
    this.labelContrasena = ".form-control-label:contains(Password)";
    this.campoContrasena = "#loginpassword";
    this.botonLogin = ".btn-primary:contains('Log in')";//"btn-primary:contains('Log in')";
    this.modalLogin = ".modal-content:contains(Log in)"
  }
}
export default class login {
  constructor() {
    this.localizadorLogin = new Login();
  }

  getLabelUsuario() {
    return cy.get(this.localizadorLogin.labelUsuario);
  }
  getLabelContrasena() {
    return cy.get(this.localizadorLogin.labelContrasena);
  }
  getCampoUsuario() {
    return cy.get(this.localizadorLogin.campoUsuario);
  }
  getCampoContrasena() {
    return cy.get(this.localizadorLogin.campoContrasena);
  }
  getBotonLogin() {
    return cy.get(this.localizadorLogin.botonLogin);
  }
  getModalLogin() {
    return cy.get(this.localizadorLogin.modalLogin);
  }
}
