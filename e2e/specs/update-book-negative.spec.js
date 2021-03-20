const axios = require('axios');
const { expect } = require('chai');
const {random} = require('faker');
    /**
     * Arrange for test1
     */
let response;
let response2;
let response3;
const updateBook = {
    "author":`Mr. Update`
};
     /**
     * Arrange for test2
     */
let response4;
let response5;
let response6;
const updateEmpyAuthorBook = {
        "name":random.word(10),
    };

    /**
     * Arrange both test
     */
    const book = {
        "name":random.word(10),
        "author":`Mr. ${random.word(2)}`
        };
    
    /**
     * Act
     */
describe ("Given a created book for Update Author", () => {
	before(async() => {
        response =await axios.post('https://integracion-continua-back.herokuapp.com/books', book)
    });
    describe ("Update the book created with empty name", () => {
        before(async() => {
            response2 = await axios.put(`https://integracion-continua-back.herokuapp.com/books/${response.data.id}`, updateBook)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response2.status).eql(200);
        });
        it("Then should return the created book",()=>{
            const createBook = response2.data;
            expect(createBook.name).to.be.null;
        });

        /**
         * Clean DataBase
         */
        describe ("Clean the DB of the created information", () => {
            before(async() => {
                response3 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/${response.data.id}`)
            });
            it("Then should return a delete status code",()=>{
                expect(response3.status).eql(200);
            });
        });
    });
});

    /**
     * Act
     */
describe ("Given a created book for Update Name", () => {
	before(async() => {
        response4 =await axios.post('https://integracion-continua-back.herokuapp.com/books', book)
    });
    describe ("Update the book created with empty name", () => {
        before(async() => {
            response5 = await axios.put(`https://integracion-continua-back.herokuapp.com/books/${response4.data.id}`, updateEmpyAuthorBook)
        });

        /**
         * Assert
         */
        it("Then should return a created status code",()=>{
            expect(response5.status).eql(200);
        });
        it("Then should return the created book",()=>{
            const createBook = response5.data;
            expect(createBook.author).to.be.null;
        });

        /**
         * Clean DataBase
         */
        describe ("Clean the DB of the created information", () => {
            before(async() => {
                response6 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/${response4.data.id}`)
            });
            it("Then should return a delete status code",()=>{
                expect(response6.status).eql(200);
            });
        });
    });
});