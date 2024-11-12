describe("template spec", () => {
  beforeEach("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
  });

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
    modalEditXpath: '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[2]',
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

  it.only("Popup del modal de edit services", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click();
    cy.xpath(employees.modalEditXpath).should("exist");
  });

  it("Popup del modal de edit nombre field", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click();
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath).clear().type("Corte cabello testing");
  });
  it("Modal edit field duración", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click();
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.durationXpath).should("exist");
    cy.xpath(employees.durationXpath).clear().type("22");
  });

  it("Modal edit field precio", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click();
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.priceXpath).should("exist");
    cy.xpath(employees.priceXpath).clear().type(33);
  });
  it("Save edit", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click();
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath).clear().type("Corte cabello testing");
    cy.xpath(employees.durationXpath).should("exist");
    cy.xpath(employees.durationXpath).clear().type("22");
    cy.xpath(employees.priceXpath).should("exist");
    cy.xpath(employees.priceXpath).clear().type(33);
    cy.xpath(employees.saveChangesXpath).should("exist");
    cy.xpath(employees.saveChangesXpath).click();
    cy.get(employees.confirmBtn).click();
  });

  it("Create service", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtn).click();
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear()
      .type("Corte cabello ingasatumais test");
    cy.xpath(employees.durationXpath).should("exist");
    cy.xpath(employees.durationXpath).clear().type("45");
    cy.xpath(employees.priceXpath).should("exist");
    cy.xpath(employees.priceXpath).clear().type(330);
    cy.xpath(employees.catalogueComboXpath).should("exist");
    cy.xpath(employees.catalogueComboXpath).select(1);
    cy.xpath(employees.saveAddXpath).click();
  });

  it("Delete service", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.deleteBtnXpath).click();
    cy.get(employees.confirmBtn).click();
  });
});
