const axios = require('axios');
const { expect } = require('chai');
const {random} = require('faker');

let response;
let response2;
const book = {
    "name":random.word(10),
    "author":`Mr. ${random.word(2)}`
    };

describe ("Given a created", () => {
	before(async() => {
        response =await axios.post('https://integracion-continua-back.herokuapp.com/books', book)
    });
    describe ("Delete the boook created", () => {
        before(async() => {
            response2 = await axios.delete(`https://integracion-continua-back.herokuapp.com/books/${response.id}`)
        });
        it("Then should return a created status code",()=>{
            expect(response.status).eql(200);
        });
    });
});