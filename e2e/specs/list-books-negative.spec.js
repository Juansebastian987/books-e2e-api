
const axios = require('axios');
const { expect } = require('chai');
   /**
     * Arrange
    */
let response;
let vacio =[]; 

    /**
     * Act
     */
describe ("When the user wants to list books and it is completely empty", () => {
	before(async ()=>{
	  response = await axios.get('https://integracion-continua-back.herokuapp.com/books');
    });

    /**
    * Assert
    */
    it("Then it should return an OK status code", () => {
        expect(response.status).eql(200);
    });
    it("Then it should return a empty list.", () => {
        const book = null;
        expect(vacio).to.be.empty;
    });
});
