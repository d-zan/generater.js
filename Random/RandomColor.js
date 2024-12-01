const {
  calmHEX,
  calmRGB,
  blueHEX,
  blueRGB,
  darkHEX,
  darkRGB,
  greenHEX,
  greenRGB,
  randomHEX,
  randomRGB,
  redHEX,
  redRGB,
  whiteHEX,
  whiteRGB,
} = require("../types/colors");
/**
 * That function will give you random color. You can choice color and HEX or RGB.
 * @param {import("../types/Random").ColorsSupport} color - The colors support.
 * @param {import("../types/Random").HEX_RGB} HexOrRGB - type color Hex or RGB.
 * @returns {string}
 */
function randomColor(color, HexOrRGB) {
  if (color === "BLUE") {
    if (HexOrRGB === "HEX") {
      const color = blueHEX[Math.floor(Math.random() * blueHEX.length)];
      return color;
    } else if (HexOrRGB === "RGB") {
      const color = blueRGB[Math.floor(Math.random() * blueRGB.length)];
      return color;
    }
  } else if (color === "CALM") {
    if (HexOrRGB === "HEX") {
      const color = calmHEX[Math.floor(Math.random() * calmHEX.length)];
      return color;
    } else if (HexOrRGB === "RGB") {
      const color = calmRGB[Math.floor(Math.random() * calmRGB.length)];
      return color;
    }
  } else if (color === "DARK") {
    if (HexOrRGB === "HEX") {
      const color = darkHEX[Math.floor(Math.random() * darkHEX.length)];
      return color;
    } else if (HexOrRGB === "RGB") {
      const color = darkRGB[Math.floor(Math.random() * darkRGB.length)];
      return color;
    }
  } else if (color === "GREEN") {
    if (HexOrRGB === "HEX") {
      if (HexOrRGB === "HEX") {
        const color = greenHEX[Math.floor(Math.random() * greenHEX.length)];
        return color;
      } else if (HexOrRGB === "RGB") {
        const color = greenRGB[Math.floor(Math.random() * greenRGB.length)];
        return color;
      }
    } else if (HexOrRGB === "RGB") {
      if (HexOrRGB === "HEX") {
        const color = calmHEX[Math.floor(Math.random() * calmHEX.length)];
        return color;
      } else if (HexOrRGB === "RGB") {
        const color = calmRGB[Math.floor(Math.random() * calmRGB.length)];
        return color;
      }
    }
  } else if (color === "RANDOM") {
    if (HexOrRGB === "HEX") {
      if (HexOrRGB === "HEX") {
        const color = randomHEX[Math.floor(Math.random() * randomHEX.length)];
        return color;
      } else if (HexOrRGB === "RGB") {
        const color = randomRGB[Math.floor(Math.random() * randomRGB.length)];
        return color;
      }
    } else if (HexOrRGB === "RGB") {
      if (HexOrRGB === "HEX") {
        const color = calmHEX[Math.floor(Math.random() * calmHEX.length)];
        return color;
      } else if (HexOrRGB === "RGB") {
        const color = calmRGB[Math.floor(Math.random() * calmRGB.length)];
        return color;
      }
    }
  } else if (color === "RED") {
    if (HexOrRGB === "HEX") {
      if (HexOrRGB === "HEX") {
        const color = redHEX[Math.floor(Math.random() * redHEX.length)];
        return color;
      } else if (HexOrRGB === "RGB") {
        const color = redRGB[Math.floor(Math.random() * redRGB.length)];
        return color;
      }
    } else if (HexOrRGB === "RGB") {
      if (HexOrRGB === "HEX") {
        const color = calmHEX[Math.floor(Math.random() * calmHEX.length)];
        return color;
      } else if (HexOrRGB === "RGB") {
        const color = calmRGB[Math.floor(Math.random() * calmRGB.length)];
        return color;
      }
    }
  } else if (color === "WHITE") {
    if (HexOrRGB === "HEX") {
      if (HexOrRGB === "HEX") {
        const color = whiteHEX[Math.floor(Math.random() * whiteHEX.length)];
        return color;
      } else if (HexOrRGB === "RGB") {
        const color = whiteRGB[Math.floor(Math.random() * whiteRGB.length)];
        return color;
      }
    }
  }
}

module.exports = randomColor;