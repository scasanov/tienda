import Login from "../support/Pages/Login";
import MenuLocalizadores from "../support/Pages/MenuLocalizadores";
import Registrarse from "../support/Pages/Registrarse";
import datosLogin from "../fixtures/data/datosLogin.json";
import datosLoginError from "../fixtures/data/datosLoginError.json";
import datosRegistro from "../fixtures/data/datosRegistrarse.json";

describe("Registrarse/Iniciar Sesion", () => {
  const login = new Login();
  const menu = new MenuLocalizadores();
  const registro = new Registrarse();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Usuario y contraseña correcta al iniciar sesion", () => {
    menu.getOpcionMenuLogin().click();
    login.getModalLogin().should("be.visible").contains("Log in");
    login.getLabelUsuario().should("be.visible").contains("Username");
    login.getCampoUsuario().type(datosLogin.usuario);
    login.getLabelContrasena().should("be.visible").contains("Password");
    login.getCampoContrasena().type(datosLogin.contrasena);

    login.getBotonLogin().click();
    cy.postCheckLogin();

  });

  //Caso Fallido
  it("Usuario y contraseña incorrecta al iniciar sesion", () => {
    menu.getOpcionMenuLogin().click();
    login.getModalLogin().should("be.visible").contains("A");
    login.getLabelUsuario().should("be.visible").contains("Username");
    login.getCampoUsuario().type(datosLogin.usuario);
    login.getLabelContrasena().should("be.visible").contains("Password");
    login.getCampoContrasena().type(datosLogin.contrasena);

    login.getBotonLogin().click();
    cy.postCheckLogin();

  });

  it("Crear un usuario al registrarse", () => {
    menu.getOpcionMenuSignup().click();
    registro.getCampoUsuarioRegistro().type(datosRegistro.usuario);
    registro.getCampoContrasenaRegistro().type(datosRegistro.contrasena);

 });

 it("Intentar crear un usuario existente", () => {
  menu.getOpcionMenuSignup().click();
  registro.getCampoUsuarioRegistro().type(datosRegistro.usuario);
  registro.getCampoContrasenaRegistro().type(datosRegistro.contrasena);

});

  
});
