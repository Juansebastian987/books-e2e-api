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

describe ("When the user wants to create a book", () => {
	before(async() => {
        response = await axios.post('https://integracion-continua-back.herokuapp.com/books', book)
    });

    /**
     * Assert
     */

    it("Then should return a created status code",()=>{
        expect(response.status).eql(200);
    });
    it("Then should return the created book",()=>{
        const createBook = response.data;
        expect(createBook.name).eql(book.name);
        expect(createBook.author).eql(book.author);
    });
    it("Then should return a Json as content type",()=>{
        expect(response.headers['content-type']).to.contain('application/json');
    });

    /**
     * Clean DataBase
     */
    describe ("Clean the DB of the created information", () => {
        before(async() => {
            response2 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/${response.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response2.status).eql(200);
        });
    });
});