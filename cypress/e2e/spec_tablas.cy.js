describe("Sidebar Navigation Tests", () => {
  beforeEach(() => {
    // Visitar la página inicial antes de cada prueba
    cy.visit("localhost:5173/dashboard"); // Cambia esto según la URL de tu aplicación
  });

  const pages = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Appointments", url: "/appointments" },
    { name: "Products", url: "/products" },
    { name: "Services", url: "/services" },
    { name: "Users", url: "/users" },
    { name: "Employees", url: "/employees" },
  ];

  //pages.forEach(({ name, url }) => {
  it(`should navigate to ${name}, check tables`, () => {
    cy.get(`.no-underline[href=${url}]`).click();
    // cy.url().should('endWith', url);

    cy.get(".MuiTable-root").should("exist");
  });

  it.only(`should navigate to, check add button`, () => {
    cy.xpath('/*[@id="root"]/div/div/div/ul[1]/a[2]/li/div/div[2]').click();
    // cy.url().should('endWith', url);
    cy.get(".MuiTable-root").eq(1).find(".btnUpdate").click(); // Selecciona el botón "EDIT" en la primera fila
    cy.get(".bg-blue-500").click(); //guardar sin cambiar nada
  });

  pages.forEach(({ name, url }) => {
    it(`should navigate to ${name}, check delete button`, () => {
      cy.get(`.no-underline[href=${url}]`).click();
      // cy.url().should('endWith', url);
      cy.get(".MuiTable-root").eq(1).find(".btnDelete").click(); // Selecciona el botón "EDIT" en la primera fila

      cy.get(".text-red-500").click(); //cancelar
    });
  });

  pages.forEach(({ name, url }) => {
    if (name === "Products") {
      it(`should navigate to ${name}, check edit button`, () => {
        cy.get(`.no-underline[href=${url}]`).click();
        // cy.url().should('endWith', url);
        cy.get(".MuiTable-root").eq(1).find(".btnUpdate").click(); // Selecciona el botón "EDIT" en la primera fila
        cy.get("#cantidad").type("10");
        cy.get(".bg-blue-500").click(); //guardar sin cambiar nada
      });
    }
  });
});
