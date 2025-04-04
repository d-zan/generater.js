class GeneraterError extends Error {
  get name() {
    return "GeneraterError";
  }
}

/**
 * Generate a simple domain
 * @param {import("../types/Generater").DomainOptions} options
 * @returns {import("../types/Generater").Domain}`}
 */
function domainGenerater(options) {
  if (!options.end || !options.start) throw new GeneraterError("[DomainGenerater]: Domain is not defined");
  if (options.start.length < 1) throw new GeneraterError("[DomainGenerater]: Domain start is empty");
  return options.start + options.end;
}

module.exports = domainGenerater;
