const axios = require('axios');
const { expect } = require('chai');

const {random} = require('faker');
   
    /**
     * Arrange for test1
     */
let response;
let response2;
const bookEmptyName = {
    "author":`Mr. ${random.word(2)}`
    };

     /**
     * Arrange for test2
     */
let response3;
let response4;

const bookEmptyAuthor = {
    "name":random.word(10),
    };
    
    /**
     * Act
     */
describe ("When the user wants to create a book and puts an empty name", () => {
	before(async() => {
        response = await axios.post('https://integracion-continua-back.herokuapp.com/books', bookEmptyName)
    });

     /**
     * Assert
     */
    it("Then should return a created status code",()=>{
        expect(response.status).eql(200);
    });
    it("Then should return the created book",()=>{
        const createBook = response.data;
        expect(createBook.name).to.be.null;
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
    /**
     * Act
     */
describe ("When the user wants to create a book and puts an empty author", () => {
	before(async() => {
        response3 = await axios.post('https://integracion-continua-back.herokuapp.com/books', bookEmptyAuthor)
    });
    
    /**
     * Assert
     */
    
    it("Then should return a created status code",()=>{
        expect(response3.status).eql(200);
    });
    it("Then should return the created book",()=>{
        const createBook = response3.data;
        expect(createBook.author).to.be.null;
    });

    /**
     * Clean DataBase
     */
    describe ("Clean the DB of the created information", () => {
        before(async() => {
            response4 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/${response3.data.id}`)
        });
        it("Then should return a delete status code",()=>{
            expect(response4.status).eql(200);
        });
    });
});