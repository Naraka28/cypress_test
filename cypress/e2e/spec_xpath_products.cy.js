describe("template spec", () => {
  beforeEach("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
  });

  const appointments = {};
  const products = {
    link: '//*[@id="root"]/div/div/div/ul[1]/a[3]/li/div/div[2]/span',
    addBtn:
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]',
    modalEditXpath: '//*[@id="root"]/div/main/div[2]/div[4]/div/div',
    nameXpath: '//*[@id="nombre"]',
    cantidadXpath: '//*[@id="cantidad"]',
    precioXpath: '//*[@id="precio"]',
    tablaXpath: '//*[@id="root"]/div/main/div[2]/div[3]/table',
    saveEditXpath:
      '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[3]/button[2]',
    closeEditXpath:
      '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[3]/button[1]',
    deleteBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[5]/div/button[2]',
    updateBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[5]/div/button[1]',
    confirmBtn: ".MuiButton-textSecondary",
    cancelBtn: ".MuiButton-textPrimary",
    addModalXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div',
    saveAddXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[2]',
    closeAddXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[1]',
    dialogueDeleteXpath:
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div[2]/div/div[1]',
    editBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[5]/div/button[1]',
  };
  const services = {
    linkXpath: '//*[@id="root"]/div/div/div/ul[1]/a[4]/li/div/div[2]/span',
    addBtn: '//*[@id="añadirBtn"]',
    modalXpath: '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div',
    nameXpath: '//*[@id="nombre"]',
    catalogueComboXpath: '//*[@id="catalogue_id"]',
    priceXpath: '//*[@id="precio"]',
    durationXpath: '//*[@id="duración"]',
    editBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[6]/div/button[1]',
    deleteBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[6]/div/button[2]',
    confirmBtn: ".MuiButton-textSecondary",
    cancelBtn: ".MuiButton-textPrimary",
    saveChangesXpath:
      '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[3]/button[2]',
    closeXpath:
      '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[3]/button[1]',
    tableXpath: '//*[@id="root"]/div/main/div[2]/div[3]/table',
  };
  const employees = {
    linkXpath: '//*[@id="root"]/div/div/div/ul[1]/a[6]/li/div/div[2]/span',
    addBtnXpath: '//*[@id="añadirBtn"]',
    editBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[7]/div/button[1]',
    deleteBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[7]/div/button[2]',
    tableXpath: '//*[@id="root"]/div/main/div[2]/div[3]/table',
    modalXpath: '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div',
    nameXpath: '//*[@id="nombre"]',
    apellidoXpath: '//*[@id="apellido"]',
    access_emailXpath: '//*[@id="access_email"]',
    personal_emailXpath: '//*[@id="personal_email"]',
    passwordXpath: '//*[@id="password"]',
    confirm_passwordXpath: '//*[@id="confirm Password"]',
    phoneXpath: '//*[@id="phone"]',
    role_id: '//*[@id="role_id"]',
    saveChangesXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[2]',
    closeXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[1]',
    confirmBtn: ".MuiButton-textSecondary",
    cancelBtn: ".MuiButton-textPrimary",
  };
  const reports = {
    respaldoBtnXpath: '//*[@id="respaldoBtn"]',
    producto_mas_vendidoXpath: '//*[@id="productTopPDF"]',
    lista_inventarioXpath: '//*[@id="inventoryPDF"]',
    empleado_cotizadoXpath: '//*[@id="employeeTopPDF"]',
    servicio_demandado: '//*[@id="serviceTopPDF"]',
    lista_precios: '//*[@id="priceListPDF"]',
  };
  const users = {
    linkXpath: '//*[@id="root"]/div/div/div/ul[1]/a[5]/li/div/div[2]/span',
    addBtnXpath: '//*[@id="añadirBtn"]',
    editBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[6]/div/button[1]',
    deleteBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[6]/div/button[2]',
    nameXpath: '//*[@id="nombre"]',
    apellidoXpath: '//*[@id="apellido"]',
    access_emailXpath: '//*[@id="access_email"]',
    personal_emailXpath: '//*[@id="personal_email"]',
    passwordXpath: '//*[@id="password"]',
    confirm_passwordXpath: '//*[@id="confirm Password"]',
    phoneXpath: '//*[@id="phone"]',
    saveChangesXpath: '//*[@id="save"]',
    closeXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[1]',
    confirmBtn: ".MuiButton-textSecondary",
    cancelBtn: ".MuiButton-textPrimary",
  };
  it("Funcionamiento del redirecccionamiento del sidebar", () => {
    cy.xpath(
      '//*[@id="root"]/div/div/div/ul[1]/a[2]/li/div/div[2]/span'
    ).click();
    cy.url().should("include", "/appointments");

    //Products
    cy.xpath(
      '//*[@id="root"]/div/div/div/ul[1]/a[3]/li/div/div[2]/span'
    ).click();
    cy.url().should("include", "/product");
    //Services
    cy.xpath(
      '//*[@id="root"]/div/div/div/ul[1]/a[4]/li/div/div[2]/span'
    ).click();
    cy.url().should("include", "/services");
    //Users
    cy.xpath(
      '//*[@id="root"]/div/div/div/ul[1]/a[5]/li/div/div[2]/span'
    ).click();
    cy.url().should("include", "/users");
    //Employees
    cy.xpath(
      '//*[@id="root"]/div/div/div/ul[1]/a[6]/li/div/div[2]/span'
    ).click();
    cy.url().should("include", "/employees");
    //Reports
    cy.xpath(
      '//*[@id="root"]/div/div/div/ul[1]/a[7]/li/div/div[2]/span'
    ).click();
    cy.url().should("include", "/reports");
  });

  it("Popup del modal de edit products", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(products.editBtnXpath).click();
    cy.xpath(products.modalEditXpath).should("exist");
  });

  it("Popup del modal de edit nombre field", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(products.editBtnXpath).click();
    cy.xpath(products.modalEditXpath).should("exist");
    cy.xpath(products.nameXpath).should("exist");
    cy.xpath(products.nameXpath).clear().type("acondicionadorTest");
  });
  it("Modal edit field cantidad", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(products.editBtnXpath).click();
    cy.xpath(products.modalEditXpath).should("exist");
    cy.xpath(products.cantidadXpath).should("exist");
    cy.xpath(products.cantidadXpath).clear().type("22");
  });

  it("Modal edit field precio", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(products.editBtnXpath).click();
    cy.xpath(products.modalEditXpath).should("exist");
    cy.xpath(products.precioXpath).should("exist");
    cy.xpath(products.precioXpath).clear().type(33);
  });
  it("Save edit", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(products.editBtnXpath).click();
    cy.xpath(products.modalEditXpath).should("exist");
    cy.xpath(products.nameXpath).should("exist");
    cy.xpath(products.nameXpath).clear().type("acondicionadorTesting");
    cy.xpath(products.cantidadXpath).should("exist");
    cy.xpath(products.cantidadXpath).clear().type("22");
    cy.xpath(products.precioXpath).should("exist");
    cy.xpath(products.precioXpath).clear().type(33);
    cy.xpath(products.saveEditXpath).click();
    cy.get(products.confirmBtn).click();
  });

  it.only("Delete product", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(products.deleteBtnXpath).click();
    cy.get(products.confirmBtn).click();
  });
});
