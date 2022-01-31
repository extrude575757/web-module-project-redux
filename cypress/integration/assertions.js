//arrange
describe('My First Test', function () {
    //act
        it('Does not do much', function() {
    //assert obvious etsts
            expect(true).to.equal(true);
            expect(false).to.equal(false);
        })
    })
    

    describe('My Second Test Visits', function () {
        //Arrange
        it('Visits IMDB under .col-sm-6', function() {
        // Act
        cy.visit("http://localhost:3000/public/index.html");
        cy.visit("http://localhost:3000/");
        cy.visit("http://localhost:3000/movies/add");
        cy.visit("http://localhost:3000/movies/");
        // cy.get('.col-sm-6').find('[type="html/text"]');
        // cy.get('.col-sm-6').submit().next().should('contain', 'IMDB Movie Database');
        // MovieHeader
        cy.get('.col-sm-6').should('contain', 'IMDB Movie Database'); 
        cy.get('.row').should('contain', 'IMDB Movie Database'); 
        cy.get('.table-title').should('contain', 'IMDB Movie Database'); 
        cy.get('.btn.btn-sm.btn-primary').should('contain', 'View All Movies'); 
        cy.get('.btn.btn-sm.btn-primary').should('contain', 'Favorites'); 
         
    })
    })
    