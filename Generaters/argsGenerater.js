class GeneraterError extends Error {
  get name() {
    return "GeneraterError";
  }
}
/**
 * Generate a just string[]
 * @param {string} content
 * @example
 const { argsGenerater } = reqiure("generater.js");
 const args = argsGenerater("Hello world");
 console.log(args); //: ["Hello","world"]
 console.log(args[0]) //: "Hello"
 console.log(args[1]) //: "world"
 */
function argsGenerater(content) {
  if (typeof content !== 'string') throw new GeneraterError('[ARGS_TYPE]: Must be string.');
  if (content === null) throw new GeneraterError("[ARGS_NULL]: Content is null.");
  if (content === undefined) throw new GeneraterError("[ARGS_UNDEFINED]: Content is undefined.");
  if (content.trim().length < 0) throw new GeneraterError('[ARGS_LENGTH]: Length is 0')
  const args = content.slice().trim().split(/ +/);
  return args;
}
module.exports = argsGenerater;
