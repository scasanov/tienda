class Carrito {
  constructor() {
    this.modal = "#orderModal";
    this.botonPagarOrden = ".btn:contains(Place Order)";
    this.labelNombre = ".form-control-label:contains(Name)";
    this.labelPais = ".form-control-label:contains(Country)";
    this.labelCiudad = ".form-control-label:contains(City)";
    this.labelTarjetaCred = ":.form-control-label:contains(Credit card)";
    this.LabelMes = ".form-control-label:contains(Month)";
    this.LabelAño = ".form-control-label:contains(Year)";
    this.campoNombre = "#name";
    this.campoPais = "#country";
    this.campoCiudad = "#city";
    this.campoTarjetaCred = "#card";
    this.campoMes = "#month";
    this.campoAño = "#year";
    this.botonPagar = ".btn-primary:contains(Purchase)";
    this.alerta = ".sweet-alert";
    this.botonOKalerta = ".confirm";
  }
}
export default class carrito {
  constructor() {
    this.localizadorCarrito = new Carrito();
  }

  getModalDatosPago() {
    return cy.get(this.localizadorCarrito.modal);
  }

  getBotonPagarOrden() {
    return cy.get(this.localizadorCarrito.botonPagarOrden);
  }

  getLabelNombre() {
    return cy.get(this.localizadorCarrito.labelNombre);
  }

  getLabelPais() {
    return cy.get(this.localizadorCarrito.labelPais);
  }
  getLabelCiudad() {
    return cy.get(this.localizadorCarrito.labelCiudad);
  }
  getlabelTarjetaCred() {
    return cy.get(this.localizadorCarrito.labelTarjetaCred);
  }
  getLabelMes() {
    return cy.get(this.localizadorCarrito.LabelMes);
  }
  getLabelAño() {
    return cy.get(this.localizadorCarrito.LabelAño);
  }

  getCampoNombre() {
    return cy.get(this.localizadorCarrito.campoNombre);
  }

  getCampoPais() {
    return cy.get(this.localizadorCarrito.campoPais);
  }

  getCampoCiudad() {
    return cy.get(this.localizadorCarrito.campoCiudad);
  }
  getCampoTarjetaCred() {
    return cy.get(this.localizadorCarrito.campoTarjetaCred);
  }
  getCampoMes() {
    return cy.get(this.localizadorCarrito.campoMes);
  }
  getCampoAño() {
    return cy.get(this.localizadorCarrito.campoAño);
  }
  getBotonPagar() {
    return cy.get(this.localizadorCarrito.botonPagar);
  }
  getAlerta() {
    return cy.get(this.localizadorCarrito.alerta);
  }
  getBotonOKalerta() {
    return cy.get(this.localizadorCarrito.botonOKalerta);
  }
}
