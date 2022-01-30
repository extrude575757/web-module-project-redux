//arrange
describe('My First Test', function () {
    //act
        it('Does not do much', function() {
    //assert
            expect(true).to.equal(true);
        })
    })
    

    describe('My Second Test', function () {
        //Arrange
        it('Visits a new site', function() {
        // Act
        cy.visit("localhost:3000/public/index.html");
        cy.get('.App').find('[type="text"]');
        cy.get('.App').submit().next().should('contain', 'IMDB Movie Database'); 
        })
    })
    