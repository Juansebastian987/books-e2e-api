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
    describe ("Delete the book created", () => {
        before(async() => {
            response2 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/0`)
        });

        /**
        * Assert
         */
        it("Then should return a delete status code",()=>{
            expect(response2.status).eql(200);
        });
        it("Then should return a Json as content type",()=>{
            expect(response2.data).to.have.length(0);
        });
    });