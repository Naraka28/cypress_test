describe("template spec", () => {
  beforeEach("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("Fallo en correo_personal (sin arroba, sin dominio)", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedroMeza@hotmail.com");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("root");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please include an '@' in the email address.");
    });
  });

  it("Fallo en correo_acceso (con arroba, sin dominio)", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@gmail.com");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedroMeza@");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("root");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please enter a part following '@'.");
    });
  });

  it("Fallo en longitud de número celular", () => {
    cy.get("[id='nombre']").type("Mario2");
    cy.get("[id='apellido']").type("Hernandez");
    cy.get("[id='rol']").select("2");
    cy.get("[id='correo_personal']").type("mar@gmail.com");
    cy.wait(500);
    cy.get("[id='celular']").type("12345");
    cy.wait(500);
    cy.get("[id='correo_acceso']").type("MarioHernandez@hotmail.como");
    cy.wait(500);
    cy.get("[id='contraseña']").type("root");
    cy.wait(500);
    cy.get("[id='contraseña_confirmar']").type("root");
    cy.wait(500);
    cy.wait(500);
    cy.get("[id='registerBtn']").click();
    cy.wait(500);
    cy.get("[id='celular']")
      .invoke("val")
      .then((celular) => {
        expect(celular.length).not.to.eq(10);
      });
    cy.get("[id='celular']").then(($input) => {
      expect($input[0].validationMessage).to.include(
        "Please match the requested format."
      );
    });
  });

  it("Fallo en coincidir contraseñas", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedroMeza");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("toor");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Las contraseñas no coinciden");
    });
  });

  it("Campo nombre vacio", () => {
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@hotmail.com");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedroMeza@gmail.com");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("toor");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out this field");
    });
  });

  it("Campo apellido vacio", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@hotmail.com");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedroMeza@gmail.com");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("toor");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out this field");
    });
  });

  it("Campo correo personal vacio", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedroMeza@gmail.com");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("toor");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out this field");
    });
  });
  it("Campo celular vacio", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@hotmail.com");
    cy.get("[id='correo_acceso']").type("pedroMeza@gmail.com");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("toor");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out this field");
    });
  });
  it("Campo correo_acceso vacio", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@hotmail.com");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("toor");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out this field");
    });
  });

  it("Campo contraseña vacio", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@hotmail.com");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedro@gmail.com");
    cy.get("[id='contraseña_confirmar']").type("toor");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out this field");
    });
  });

  it("Campo confimar_contraseña vacio", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@hotmail.com");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedro@gmail.com");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please fill out this field");
    });
  });
  
  

  it('Boton regresar redirecciona correctamente', () => {
    cy.wait(500)
    cy.get("[id='backBtn']").click()
    cy.url().should('include', '/loginAdmin.html');

   })

  it("Registro exitoso de usuario", () => {
    cy.get("[id='nombre']").type("Pedro");
    cy.get("[id='apellido']").type("Meza");
    cy.get("[id='rol']").select("1");
    cy.get("[id='correo_personal']").type("pedritoxX2004@gmail.com");
    cy.get("[id='celular']").type("6442597572");
    cy.get("[id='correo_acceso']").type("pedroMeza@gmail.com");
    cy.get("[id='contraseña']").type("root");
    cy.get("[id='contraseña_confirmar']").type("root");
    cy.get("[id='rol']").should("have.value", "1");
    cy.get("[id='registerBtn']").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Registro exitoso, redirigiendo...");
    });
    cy.url().should("include", "/templates/login.html");
  });
});
