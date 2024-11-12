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
      '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[3]/button[2]',
    closeXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[1]',
    confirmBtn: ".MuiButton-textSecondary",
    cancelBtn: ".MuiButton-textPrimary",
    modalEditXpath: '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[2]',
    saveChangesAddXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[2]',
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
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
  });

  it("Popup del modal de edit nombre field", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath).clear().type("Miguelowo", { force: true });
  });
  it("Modal edit field apellido", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
  });

  it("Modal edit field access_email", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath).clear().type("Miguelowo@gmail.com");
  });
  it("Modal edit field personal_email", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
  });
  it("Modal edit field password", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
  });
  it("Modal edit field confirm_password", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
  });
  it("Modal edit field phone", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
  });
  it("Save edit", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath).clear().type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath).clear().type("Miguelowo@gmail.com");
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.saveChangesXpath).should("exist");
    cy.xpath(employees.saveChangesXpath).click();
    cy.get(employees.confirmBtn).click();
  });
  it("Cancel a save edit", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.editBtnXpath).click({ force: true });
    cy.xpath(employees.modalEditXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath).clear().type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath).clear().type("Miguelowo@gmail.com");
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.saveChangesXpath).should("exist");
    cy.xpath(employees.saveChangesXpath).click();
    cy.get(employees.cancelBtn).click();
  });

  it.skip("Create employee", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath)
      .clear()
      .type("Miguelowo@gmail.com", { force: true });
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.saveChangesAddXpath).should("exist");
    cy.xpath(employees.saveChangesAddXpath).click();
  });
  it("Cancel a create employee", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath)
      .clear()
      .type("Miguelowo@gmail.com", { force: true });
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.closeXpath).click();
  });

  it("Delete employee", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.deleteBtnXpath).click({ force: true });
    cy.get(employees.confirmBtn).click();
  });
  it("Cancel a delete employee", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.deleteBtnXpath).click({ force: true });
    cy.get(employees.cancelBtn).click();
  });

  it("Validar access_email en blanco", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath).clear();
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.saveChangesAddXpath).should("exist");
    cy.xpath(employees.saveChangesAddXpath).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("El correo de acceso es obligatorio");
    });
  });
  it("Validar access_email malformado", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath)
      .clear()
      .type("Miguelowo", { force: true });
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.saveChangesAddXpath).should("exist");
    cy.xpath(employees.saveChangesAddXpath).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Por favor, ingresa un correo de acceso válido");
    });
  });

  it("Validar personal_email en blanco", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath)
      .clear()
      .type("Miguelowo@gmail.com", { force: true });
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath);
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.saveChangesAddXpath).should("exist");
    cy.xpath(employees.saveChangesAddXpath).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("El correo personal es obligatorio");
    });
  });
  it("Validar personal_email malformado", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath)
      .clear()
      .type("Miguelowo@gmail.com", { force: true });
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).clear().type("asumecha");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).clear().type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.saveChangesAddXpath).should("exist");
    cy.xpath(employees.saveChangesAddXpath).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Por favor, ingresa un correo personal válido");
    });
  });
  it.only("Validar password en blanco", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath)
      .clear()
      .type("Miguelowo@gmail.com", { force: true });
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath);
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath);
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.saveChangesAddXpath).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("La contraseña debe tener al menos 8 caracteres");
    });
  });
  it.only("Validar password no concuerdan", () => {
    cy.visit("http://127.0.0.1:5173/employees");
    cy.xpath(employees.addBtnXpath).click({ force: true });
    cy.xpath(employees.modalXpath).should("exist");
    cy.xpath(employees.nameXpath).should("exist");
    cy.xpath(employees.nameXpath)
      .clear({ force: true })
      .type("Miguelowo", { force: true });
    cy.xpath(employees.apellidoXpath).should("exist");
    cy.xpath(employees.apellidoXpath).clear().type("Latte", { force: true });
    cy.xpath(employees.access_emailXpath).should("exist");
    cy.xpath(employees.access_emailXpath)
      .clear()
      .type("Miguelowo@gmail.com", { force: true });
    cy.xpath(employees.personal_emailXpath).should("exist");
    cy.xpath(employees.personal_emailXpath)
      .clear()
      .type("chiquitin@gmail.com", { force: true });
    cy.xpath(employees.passwordXpath).should("exist");
    cy.xpath(employees.passwordXpath).type("asumechaaa");
    cy.xpath(employees.confirm_passwordXpath).should("exist");
    cy.xpath(employees.confirm_passwordXpath).type("asumecha");
    cy.xpath(employees.phoneXpath).should("exist");
    cy.xpath(employees.phoneXpath).clear().type("6622334567");
    cy.xpath(employees.role_id).should("exist");
    cy.xpath(employees.role_id).select(1);
    cy.xpath(employees.saveChangesAddXpath).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Las contraseñas no coinciden");
    });
  });
});
