const axios = require('axios');
const { expect } = require('chai');
const {random} = require('faker');
    /**
     * Arrange
     */
let response;
let response2;
const book = {
    "name":random.word(10),
    "author":`Mr. ${random.word(2)}`
    };
    
    /**
     * Act
     */
describe ("Given a book created", () => {
	before(async() => {
        response =await axios.post('https://integracion-continua-back.herokuapp.com/books', book)
    });
    describe ("Delete the book created", () => {
        before(async() => {
            response2 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/${response.data.id}`)
        });

        /**
         * Assert
         */
        it("Then should return a delete status code",()=>{
            expect(response2.status).eql(200);
        });
    });
});