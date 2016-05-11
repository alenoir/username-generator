var nouns = require('./nouns.json');
var adjectives = require('./adjectives.json');

module.exports.generateUsername = function (separator) {
	if(separator==undefined)separator="";
	var noun = nouns[Math.floor(Math.random()*nouns.length)];
	var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
	return noun + separator + adjective;
};
