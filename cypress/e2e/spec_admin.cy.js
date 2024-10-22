describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://127.0.0.1:5173/login')
  })


//   beforeEach(() => {
//   cy.visit('http://127.0.0.1:5500/templates/login.html')
// })


   it('ingresa las credenciales incorrectas', () => {
    
    cy.get("[id='correo']").type("pedro@gmail.com")
    cy.get("[id='contraseña']").type("1345")
    cy.get("[id='loginBtn']").click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Credenciales incorrectas');
    });
   })

   it('ingresa el correo sin arroba', () => {
    
    cy.get("[id='correo']").type("daniel")
    cy.get("[id='contraseña']").type("root") // contraseña correcta
    cy.get("[id='loginBtn']").click()
    cy.get("[id='correo']")
      .then(($input) => {
        expect($input[0].validationMessage).to.include("Please include an '@' in the email address.");
      });

   })

   it('ingresa el correo sin dominio', () => {
    
    cy.get("[id='correo']").type("daniel@")
    cy.get("[id='contraseña']").type("root")
    cy.get("[id='loginBtn']").click()
    cy.get("[id='correo']")
      .then(($input) => {
        expect($input[0].validationMessage).to.include("Please enter a part following '@'.");
      });

   })

   it('ingresa correo sin contraseña', () => {
    cy.get("[id='correo']").type("daniel@gmail.com")
    cy.get("[id='loginBtn']").click()
    cy.get("[id='contraseña']")
      .then(($input) => {
        expect($input[0].validationMessage).to.include("Please fill out this field");
      });

   })
   

   it('ingresa contraseña sin correo', () => {
    cy.get("[id='contraseña']").type("root")
    cy.get("[id='loginBtn']").click()
    cy.get("[id='correo']")
      .then(($input) => {
        expect($input[0].validationMessage).to.include("Please fill out this field");
      });

   })
   

   it('ingresa las credenciales correctas', () => {
   
    cy.get("[id='correo']").type("daniel@gmail.com")
    cy.get("[id='contraseña']").type("root")
    cy.get("[id='loginBtn']").click()
    cy.url().should('include', '/registroUsuario.html');
    
  })


})