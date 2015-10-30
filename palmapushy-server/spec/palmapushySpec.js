var request = require("request");
var base_url = "http://localhost:3000/api/"

describe("palmapushy Server", function() {

  describe('GET /api/users', function(){

    it("should respond 200", function(done) {
      request(base_url + 'users', function(error, response, body){
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it("should return a collection", function(done) {
      request(base_url + 'users', function(error, response, body){
        expect(Array.isArray(body)).toBe(false);
        done();
      });
    });

  });

});
