/**
 * 
 * @param {object} options - Default: {}
 * 
 * ## Options
 * 
 * Currently under development.
 */
const engineerPlugin = function(options = {}) {
	return {
		name: 'satelite-engineer',
		buildStart() {
			const engineer = require("@ericksatelite/engineer")
			engineer()
		}
	  }
}

export default engineerPlugin