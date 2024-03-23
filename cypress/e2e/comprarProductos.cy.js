import TarjetasHome from "../support/Pages/TarjetasHome"
import MenuLocalizadores from "../support/Pages/MenuLocalizadores";
import Carrito from "../support/Pages/Carrito";
import datoscarrito from "../fixtures/data/datosPagarOrden.json";

describe("Comprar productos", () => {
  const menu = new MenuLocalizadores();
  const tarjetas = new TarjetasHome();
  const carrito = new Carrito();

  beforeEach(() => {
    cy.visit("/");
  });
  it("Agregar productos al carrito", () => {
    //Se selecciona cada producto, agregandolo al carrito de compra
    tarjetas.getTarjeta1().click();
    tarjetas.getBotonAgregar().contains("Add to cart").click();
    menu.getOpcionMenuHome().click();
    tarjetas.getTarjeta2().click();
    tarjetas.getBotonAgregar().contains("Add to cart").click();

    menu.getOpcionMenuCart().click();
    carrito.getBotonPagarOrden().click();

    carrito.getModalDatosPago().should("be.visible");
    //completo el formulario de la orden de compra
    carrito.getCampoNombre().type(datoscarrito.campoNombre);
    carrito.getCampoPais().type(datoscarrito.campoPais);
    carrito.getCampoCiudad().type(datoscarrito.campoCiudad);
    carrito.getCampoTarjetaCred().type(datoscarrito.campoTarjetaCred);
    carrito.getCampoMes().type(datoscarrito.campoMes);
    carrito.getCampoAño().type(datoscarrito.campoAño);
    carrito.getBotonPagar().click();

    carrito
      .getAlerta()
      .should("be.visible")
      .contains("Thank you for your purchase!");
    carrito.getBotonOKalerta().click();


  });
});
