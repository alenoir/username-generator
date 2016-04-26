var nouns = require('./nouns.json');
var adjectives = require('./adjectives.json');

module.exports.generateUsername = function (separator = "") {
  let noun = nouns[Math.floor(Math.random()*nouns.length)];
  let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
  return noun + separator + adjective;
};
