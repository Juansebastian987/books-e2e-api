const axios = require('axios');
const { expect } = require('chai');

   /**
     * Arrange
    */
let response;

const book = {
    "name": "Clase QA",
    "author": "Juan Sebastian Cardona"
    };

    /**
     * Act
     */
describe ("When the user wants to list books", () => {
	before(async ()=>{
	  response = await axios.get('https://integracion-continua-back.herokuapp.com/books');
    });

    /**
    * Assert
    */
    it("Then it should return an OK status code", () => {
        expect(response.status).eql(200);
    });
    it("Then it should return book with autor, id and name.", () => {
        expect(response.data.length).to.be.greaterThan(0);
        for(var i=0;i<response.data.length;i++){
            const bookResponse = response.data[i];
            expect(bookResponse.name).to.not.equal(book.name);
        } 
    });
});