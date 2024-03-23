class MenuLocalizadores {
  constructor() {
    this.menuHome = ".nav-link:contains(Home)";
    this.menuContact = ".nav-link:contains(Contact)";
    this.menuAboutUs = ".nav-link:contains(About us)";
    this.menuCart = ".nav-link:contains(Cart)";
    this.menuLogin = "#login2";
    this.menuSignup = "#signin2";
  }
}
// necesario para poder utilizarlo en mis casos de prueba
export default class menuLocalizadores {
  constructor() {
    this.localizadores = new MenuLocalizadores();
  }

  getOpcionMenuHome() {
    return cy.get(this.localizadores.menuHome);
  }

  getOpcionMenuContact() {
    return cy.get(this.localizadores.menuContact);
  }

  getOpcionMenuAboutUs() {
    return cy.get(this.localizadores.menuAboutUs);
  }
  getOpcionMenuCart() {
    return cy.get(this.localizadores.menuCart);
  }
  getOpcionMenuLogin() {
    return cy.get(this.localizadores.menuLogin);
  }
  getOpcionMenuSignup() {
    return cy.get(this.localizadores.menuSignup);
  }
}
