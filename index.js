var loaders = [];
var resourcerer = {

	addLoader : function addLoader(loader) {
		loaders.push(loader);
	},

	getResource : function getResource(identifier) {
		return loaders.reduce(function(result, loader) {
			return result || loader(identifier);
		}, null);
	}

};

module.exports = resourcerer;
