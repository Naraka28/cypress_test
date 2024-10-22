describe('Sidebar Navigation Tests', () => {
    beforeEach(() => {
        // Visitar la página inicial antes de cada prueba
        cy.visit('localhost:5173/dashboard'); // Cambia esto según la URL de tu aplicación
    });

   
       it('utilizar boton añadir usuario', () => {
            cy.url().should('include', '/dashboard')
            cy.get("[id='añadirBtn']").click()
            cy.get("[id='nombre']").type("Gael")
            cy.get("[id='apellido']").type("Borchardt")
            cy.get("[id='email']").type("gael1234@gmail.com")
            cy.get("[id='password']").type("12345")
            cy.get("[id='phone']").type("6442597572")
            cy.get('.bg-blue-500').click()

           })
    
    
    

    const pages = [
        { name: 'Dashboard', url: '/dashboard' },
        { name: 'Appointments', url: '/appointments' },
        { name: 'Products', url: '/products' },
        { name: 'Services', url: '/services' },
        { name: 'Users', url: '/users' },
        { name: 'Employees', url: '/employees' },
    ];

    pages.forEach(({ name, url }) => {
        it(`should navigate to ${name} view and check URL`, () => {
            cy.get(`.no-underline.text-black[href=${url}]`).click()
            cy.url().should('endWith', url);
        });
    });

    pages.forEach(({ name, url }) => {
        it(`should navigate to ${name}, check ADD modal`, () => {
            cy.get(`.no-underline.text-black[href=${url}]`).click()
           // cy.url().should('endWith', url);
            cy.get("[id='añadirBtn']").click()
            cy.contains('.text-3xl font-semibold', `Añadir ${name}`)

        });
    });

    pages.forEach(({ name, url }) => {
        it(`should navigate to ${name}, check tables`, () => {
            cy.get(`.no-underline.text-black[href=${url}]`).click()
           // cy.url().should('endWith', url);
           cy.get('#añadirBtn').click()
           cy.get('.MuiTable-root.css-1ks3uzw-MuiTable-root').should('exist')
        
        });
    });

});