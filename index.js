'use strict';

module.exports = function (string, maxLength, fillString) {

  if (string == null || maxLength == null) {
    return string;
  }

  var result    = String(string);
  var targetLen = typeof maxLength === 'number'
    ? maxLength
    : parseInt(maxLength, 10);

  if (isNaN(targetLen) || !isFinite(targetLen)) {
    return result;
  }


  var length = result.length;
  if (length >= targetLen) {
    return result;
  }


  var fill = fillString == null ? '' : String(fillString);
  if (fill === '') {
    fill = ' ';
  }


  var fillLen = targetLen - length;

  while (fill.length < fillLen) {
    fill += fill;
  }

  var truncated = fill.length > fillLen ? fill.substr(0, fillLen) : fill;

  return truncated + result;
};
