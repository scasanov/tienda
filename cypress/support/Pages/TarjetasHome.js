class TarjetasHome {
  constructor() {
    this.card1 = ".hrefch:contains(Samsung galaxy s6)";
    this.card2 = ".hrefch:contains(Nokia lumia 1520)";
    this.botonAgregar = ".btn:contains(Add to cart)";
  }
}
export default class tarjetasHome {
  constructor() {
    this.localizadorTarjeta = new TarjetasHome();
  }

  getTarjeta1() {
    return cy.get(this.localizadorTarjeta.card1);
  }
  getTarjeta2() {
    return cy.get(this.localizadorTarjeta.card2);
  }
  getBotonAgregar() {
    return cy.get(this.localizadorTarjeta.botonAgregar);
  }
}
