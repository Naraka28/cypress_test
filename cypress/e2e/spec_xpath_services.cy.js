describe("template spec", () => {
  beforeEach("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
  });

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
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[1]',
    tableXpath: '//*[@id="root"]/div/main/div[2]/div[3]/table',
    modalEditXpath: '//*[@id="root"]/div/main/div[2]/div[4]/div/div',
    saveAddXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[2]',
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

  it("Popup del modal de edit services", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.editBtnXpath).click();
    cy.xpath(services.modalEditXpath).should("exist");
  });

  it("Popup del modal de edit nombre field", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.editBtnXpath).click();
    cy.xpath(services.modalEditXpath).should("exist");
    cy.xpath(services.nameXpath).should("exist");
    cy.xpath(services.nameXpath).clear().type("Corte cabello testing");
  });
  it("Modal edit field duración", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.editBtnXpath).click();
    cy.xpath(services.modalEditXpath).should("exist");
    cy.xpath(services.durationXpath).should("exist");
    cy.xpath(services.durationXpath).clear().type("22");
  });

  it("Modal edit field precio", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.editBtnXpath).click();
    cy.xpath(services.modalEditXpath).should("exist");
    cy.xpath(services.priceXpath).should("exist");
    cy.xpath(services.priceXpath).clear().type(33);
  });
  it("Save edit", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.editBtnXpath).should("exist");
    cy.xpath(services.editBtnXpath).click();
    cy.xpath(services.modalEditXpath).should("exist");
    cy.xpath(services.nameXpath).should("exist");
    cy.xpath(services.nameXpath).clear().type("Corte cabello testing");
    cy.xpath(services.durationXpath).should("exist");
    cy.xpath(services.durationXpath).clear().type("22");
    cy.xpath(services.priceXpath).should("exist");
    cy.xpath(services.priceXpath).clear().type(33);
    cy.xpath(services.saveChangesXpath).should("exist");
    cy.xpath(services.saveChangesXpath).click();
    cy.get(services.confirmBtn).click();
  });
  it.only("Cancel a save edit", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.editBtnXpath).should("exist");
    cy.xpath(services.editBtnXpath).click();
    cy.xpath(services.modalEditXpath).should("exist");
    cy.xpath(services.nameXpath).should("exist");
    cy.xpath(services.nameXpath).clear().type("Corte cabello testing");
    cy.xpath(services.durationXpath).should("exist");
    cy.xpath(services.durationXpath).clear().type("22");
    cy.xpath(services.priceXpath).should("exist");
    cy.xpath(services.priceXpath).clear().type(33);
    cy.xpath(services.saveChangesXpath).should("exist");
    cy.xpath(services.saveChangesXpath).click();
    cy.get(services.cancelBtn).click();
  });

  it("Create service", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.addBtn).should("exist");
    cy.xpath(services.addBtn).click();
    cy.xpath(services.modalXpath).should("exist");
    cy.xpath(services.nameXpath).should("exist");
    cy.xpath(services.nameXpath)
      .clear()
      .type("Corte cabello ingasatumais test");
    cy.xpath(services.durationXpath).should("exist");
    cy.xpath(services.durationXpath).clear().type("45");
    cy.xpath(services.priceXpath).should("exist");
    cy.xpath(services.priceXpath).clear().type(330);
    cy.xpath(services.catalogueComboXpath).should("exist");
    cy.xpath(services.catalogueComboXpath).select(1);
    cy.xpath(services.saveAddXpath).click();
  });
  it.only("Cancel a create service", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.addBtn).should("exist");
    cy.xpath(services.addBtn).click();
    cy.xpath(services.modalXpath).should("exist");
    cy.xpath(services.nameXpath).should("exist");
    cy.xpath(services.nameXpath)
      .clear()
      .type("Corte cabello ingasatumais test");
    cy.xpath(services.durationXpath).should("exist");
    cy.xpath(services.durationXpath).clear().type("45");
    cy.xpath(services.priceXpath).should("exist");
    cy.xpath(services.priceXpath).clear().type(330);
    cy.xpath(services.catalogueComboXpath).should("exist");
    cy.xpath(services.catalogueComboXpath).select(1);
    cy.xpath(services.closeXpath).click();
  });

  it("Delete service", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.deleteBtnXpath).should("exist");
    cy.xpath(services.deleteBtnXpath).click();
    cy.get(services.confirmBtn).click();
  });
  it.only("Delete service", () => {
    cy.visit("http://127.0.0.1:5173/services");
    cy.xpath(services.deleteBtnXpath).should("exist");
    cy.xpath(services.deleteBtnXpath).click();
    cy.get(services.cancelBtn).click();
  });
});
