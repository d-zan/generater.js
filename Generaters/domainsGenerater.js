/**
 * Generate a simple domain
 * @param {import("../types/Generater").DomainOptions} options 
 * @returns {`${string}${import("../types/Generater").Domains}`}
 */
function generateDomain(options) {
 return options.start + options.end   
}

module.exports = generateDomain;