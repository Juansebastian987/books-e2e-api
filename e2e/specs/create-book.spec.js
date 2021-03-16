const axios = require('axios');
const { expect } = require('chai');
const {random} = require('faker');

let response;
const book = {
    "name":random.word(10),
    "author":`Mr. ${random.word(2)}`
    };
    
describe ("When the user wants to create a book", () => {
	before(async() => {
        response = await axios.post('https://integracion-continua-back.herokuapp.com/books', book)
    });
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
});