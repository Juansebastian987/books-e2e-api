const axios = require('axios');
const { expect } = require('chai');
const {random} = require('faker');

    /**
     * Arrange
     */
let response;
let response2;
let response3;
const book = {
    "name":random.word(10),
    "author":`Mr. ${random.word(2)}`
    };

const updatBook = {
        "name":random.word(10),
        "author":`Mr. Update`
    };

    /**
     * Act
     */
describe ("Given a created", () => {
	before(async() => {
        response =await axios.post('https://integracion-continua-back.herokuapp.com/books', book)
    });
    describe ("Update the book created", () => {
        before(async() => {
            response2 = await axios.put(`https://integracion-continua-back.herokuapp.com/books/${response.data.id}`, updatBook)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response.status).eql(200);
        });

        /**
         * Clean Back-End
         */
        describe ("Clean the back of the created information", () => {
            before(async() => {
                response3 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/${response.data.id}`)
            });
            it("Then should return a delete status code",()=>{
                expect(response3.status).eql(200);
            });
        });
    });
});