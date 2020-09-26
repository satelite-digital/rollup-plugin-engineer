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
		load() {
			this.addWatchFile(path.resolve('./.engineer'))
		},
		buildStart() {
			engineer()
		}
	  }
}

export default engineerPlugin