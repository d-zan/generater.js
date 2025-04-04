class GeneraterError extends Error {
    get name() {
      return "GeneraterError";
    }
  }
class RandomError extends Error {
    get name() {
      return "RandomError";
    }
  }
  module.exports = {GeneraterError,RandomError}