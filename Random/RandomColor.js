const ColorsData = require("../tools/color");

class RandomError extends Error {
    get name() {
      return "RandomError";
    }
  }
/**
 * That function will give you random color. You can choice color and HEX or RGB.
 * @param {import("../types/Random").ColorsSupport} color - The colors support.
 * @param {import("../types/Random").HEX_RGB} HexOrRGB - type color Hex or RGB.
 * @returns {string}
 */
function randomColor(color, HexOrRGB) {
  if (!color) throw new RandomError("[RandomColor]: Please provide a color.");
    const colorData = ColorsData[`${color}_${HexOrRGB}`];
    if (!colorData) throw new RandomError(`[RandomColor]: Color ${color} not supported.`);
    const color = colorData[Math.floor(Math.random() * colorData.length)];
      return color;
}

module.exports = randomColor;