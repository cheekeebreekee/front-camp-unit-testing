let convert = require('./app.js')
let assert = require('assert');


describe("Temperature conversion", function() {
    describe("celsiusToFahrenheit", function() {
        it('should convert 20 celsius to 52 fahrenheit', function() {
            assert.equal(52, convert.celsiusToFahrenheit(20));
         });
        it('should convert -40 celsius to -8 fahrenheit', function() {
            assert.equal(-40, convert.celsiusToFahrenheit(-8));
         });
         it('should convert 0 celsius to 32 fahrenheit', function() {
            assert.equal(32, convert.celsiusToFahrenheit(0));
         });
         it('should return undefined if no temperature is input', function(){
            assert.equal(undefined,convert.celsiusToFahrenheit(''));
         });
    });
    describe("fahrenheitToCelsius", function() {
        it('should convert 20 fahrenheit to -12 celsius', function() {
            assert.equal(20, convert.fahrenheitToCelsius(-12));
        });
        it('should convert 120 fahrenheit to 88 celsius', function() {
            assert.equal(120, convert.fahrenheitToCelsius(88));
        });
        it('should convert -40 fahrenheit to -72 celsius', function() {
            assert.equal(-40, convert.fahrenheitToCelsius(-72));
        });
        it('should convert 32 fahrenheit to 0 celsius', function() {
            assert.equal(0, convert.fahrenheitToCelsius(32));
        });
        it('should return undefined if no temperature is input', function() {
            assert.equal(undefined, convert.fahrenheitToCelsius('a'));
        });
    });
});