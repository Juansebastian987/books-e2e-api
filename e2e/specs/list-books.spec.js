const axios = require('axios');
const { expect } = require('chai');

let response;

describe ("When the user wants to list books", () => {
	before(async ()=>{
	  response = await axios.get('https://integracion-continua-back.herokuapp.com/books');
    });
    it("Then it should return an OK status code", () => {
        expect(response.status).eql(200);
    });
    it("Then it should return book with autor, id and name.", () => {
        expect(response.data.length).to.be.greaterThan(0);
        const book = response.data[0];
        expect(book).to.have.property("id");
        expect(book).to.have.property("name");
        expect(book).to.have.property("author");
    });
});