var nouns = require('./nouns.json');
var adjectives = require('./adjectives.json');

module.exports.generateUsername = function (separator, length) {
	if(separator==undefined)separator="";
	var noun = nouns[Math.floor(Math.random()*nouns.length)];
	var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

	var result = noun + separator + adjective;
	
	if (length) {
		result = result.substring(0, length);
	}
	return result
};
