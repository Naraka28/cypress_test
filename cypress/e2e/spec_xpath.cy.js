describe("template spec", () => {
  beforeEach("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
  });

  const appointments = {};
  const products = {
    link: '//*[@id="root"]/div/div/div/ul[1]/a[3]/li/div/div[2]/span',
    anadirBtn:
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]',
    modalXpath: '//*[@id="root"]/div/main/div[2]/div/div[3]/div[2]/div/div[1]',
    nameXpath: '//*[@id="nombre"]',
    cantidadXpath: '//*[@id="cantidad"]',
    precioXpath: '//*[@id="precio"]',
    tablaXpath: '//*[@id="root"]/div/main/div[2]/div[3]/table',
    saveEditXpath:
      '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[3]/button[2]',
    closeEditXpath:
      '//*[@id="root"]/div/main/div[2]/div[4]/div/div/div[3]/button[2]',
    confirmEditXpath: "/html/body/div[3]/div[3]/div/div[2]/button[2]",
    cancelEditXpath: "/html/body/div[3]/div[3]/div/div[2]/button[1]",
    deleteBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[5]/div/button[2]',
    updateBtnXpath:
      '//*[@id="root"]/div/main/div[2]/div[3]/table/tbody/tr[1]/td[5]/div/button[1]',
    confirmDeleteXpath: "/html/body/div[3]/div[3]/div/div[2]/button[2]",
    cancelDeleteXpath: "/html/body/div[3]/div[3]/div/div[2]/button[1]",
    anadirModalXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div',
    saveAnadirXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[2]',
    closeAnadirXpath:
      '//*[@id="root"]/div/main/div[2]/div[2]/div[2]/div[1]/div/div/div[3]/button[1]',
  };
  const services = {};
  const employees = {};
  const reports = {};
  const users = {};
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
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    ).click();
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div[2]/div/div[1]'
    ).should("exist");
  });

  it("Popup del modal de edit nombre field", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    ).click();
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div[2]/div/div[1]'
    ).should("exist");
    cy.xpath('//*[@id="nombre"]').should("exist");
    cy.xpath('//*[@id="nombre"]').clear().type("acondicionadorTest");
  });
  it("Modal edit field cantidad", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    ).click();
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div[2]/div/div[1]'
    ).should("exist");
    cy.xpath('//*[@id="cantidad"]').should("exist");
    cy.xpath('//*[@id="cantidad"]').clear().type("22");
  });

  it("Modal edit field precio", () => {
    cy.visit("http://127.0.0.1:5173/products");
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div/table/tbody/tr[1]/td[5]/div/button[1]'
    ).click();
    cy.xpath(
      '//*[@id="root"]/div/main/div[2]/div/div[3]/div[2]/div/div[1]'
    ).should("exist");
    cy.xpath('//*[@id="precio"]').should("exist");
    cy.xpath('//*[@id="precio"]').clear().type(33);
  });
});
