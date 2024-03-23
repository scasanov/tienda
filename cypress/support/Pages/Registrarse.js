class Registrarse {
  constructor() {
    this.registroUsuario = "#sign-username";
    this.registroContrasena = "#sign-password";
    this.botonSignIn = ".btn-primary:contains(Sign up)";
  }
}
export default class registrarse {
  constructor() {
    this.localizadorRegistro = new Registrarse();
  }
  getCampoUsuarioRegistro() {
    return cy.get(this.localizadorRegistro.registroUsuario);
  }

  getCampoContrasenaRegistro() {
    return cy.get(this.localizadorRegistro.registroContrasena);
  }
  getBotonSignIn() {
    return cy.get(this.localizadorRegistro.botonSignIn);
  }
}
