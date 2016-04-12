'use strict';

var expect = require('chai').expect;

describe('pad-start: ', function () {

  var padStart = require('../../');

  it('This method (possibly repeatedly) prefixes the receiver with fillString, until its length is maxLength:', function () {

    expect(padStart('abc', 10)).to.equal('       abc');
    expect(padStart('abc', 10, 'foo')).to.equal('foofoofabc');
    expect(padStart('abc', 6, '123465')).to.equal('123abc');
  });

  it('If necessary, a fragment of fillString is used so that the result’s length is exactly maxLength:', function () {
    expect(padStart('x', 4, 'ab')).to.equal('abax');
  });

  it('If the receiver is as long as, or longer than, maxLength, it is returned unchanged:', function () {
    expect(padStart('abcd', 2, '#')).to.equal('abcd');
  });

  it('If maxLength and fillString.length are the same, fillString becomes a mask into which the receiver is inserted, at the end:', function () {
    expect(padStart('abc', 10, '0123456789')).to.equal('0123456abc');
  });

  it('If you omit fillString, a string with a single space in it is used (\' \'):', function () {
    expect(padStart('x', 3)).to.equal('  x');
  });

  it('If string or maxLength is null or undefined, return the string directly:', function () {
    expect(padStart()).to.be.an('undefined');
    expect(padStart('x')).to.equal('x');
    expect(padStart('x', null)).to.equal('x');
    expect(padStart('x', 'a')).to.equal('x');
  });
});
