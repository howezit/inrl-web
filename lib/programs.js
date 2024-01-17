const UglifyJS = require("uglify-js");
const beautify = require('js-beautify/js')
const JavaScriptObfuscator = require('javascript-obfuscator');

const morseCode = {
  A: "•-",
  B: "-•••",
  C: "-•-•",
  D: "-••",
  E: "•",
  F: "••-•",
  G: "--•",
  H: "••••",
  I: "••",
  J: "•---",
  K: "-•-",
  L: "•-••",
  M: "--",
  N: "-•",
  O: "---",
  P: "•--•",
  Q: "--•-",
  R: "•-•",
  S: "•••",
  T: "-",
  U: "••-",
  V: "•••-",
  W: "•--",
  X: "-••-",
  Y: "-•--",
  Z: "--••",
  0: "-----",
  1: "•----",
  2: "••---",
  3: "•••--",
  4: "••••-",
  5: "•••••",
  6: "-••••",
  7: "--••••",
  8: "---•••",
  9: "----••",
  ".": "•-•-•-",
  ",": "--••--",
  "?": "••--••",
  "'": "•----•",
  "!": "-•-•--",
  "/": "-••-•",
  "(": "-•--•",
  ")": "-•--•-",
  "&": "•-•-•",
  ":": "---•••",
  ";": "-•-•-•",
  "=": "-•••-",
  "+": "•-•-•",
  "-": "-••••-",
  _: "••--•-",
  '"': "•-••-•",
  "@": "•--•-•",
  " ": "/",
};
const morseCodeFlipped = {
  "•-": "A",
  "-•••": "B",
  "-•-•": "C",
  "-••": "D",
  "•": "E",
  "••-•": "F",
  "--•": "G",
  "••••": "H",
  "••": "I",
  "•---": "J",
  "-•-": "K",
  "•-••": "L",
  "--": "M",
  "-•": "N",
  "---": "O",
    "•--•": "P",
    "--•-": "Q",
    "•-•": "R",
    "•••": "S",
    "-": "T",
    "••-": "U",
    "•••-": "V",
    "•--": "W",
    "-••-": "X",
    "-•--": "Y",
    "--••": "Z",
    "-----": "0",
    "•----": "1",
    "••---": "2",
    "•••--": "3",
    "••••-": "4",
    "•••••": "5",
    "-••••": "6",
    "--••••": "7",
    "---•••": "8",
    "----••": "9",
    "•-•-•-": ".",
    "--••--": ",",
    "••--••": "?",
    "•----•": "'",
    "-•-•--": "!",
    "-••-•": "/",
    "-•--•": "(",
    "-•--•-": ")",
    "•-•-•": "&",
    "---•••": ":",
    "-•-•-•": ";",
    "-•••-": "=",
    "•-•-•": "+",
    "-••••-": "-",
    "••--•-": "_",
    "•-••-•": '"',
    "•--•-•": "@",
    "/": " ",
  };
  function morece_encode(code) {
    return code
      .toUpperCase()
      .split("")
      .map((char) => morseCode[char] || char)
      .join(" ");
  }
  function decode_morece(code) {
  return code
      .split(" ")
      .map((char) => morseCodeFlipped[char] || char)
      .join("");
  }

async function jsObfuscate(code) {
	return await JavaScriptObfuscator.obfuscate(
		code, {
			compact: true,
			controlFlowFlattening: true,
			controlFlowFlatteningThreshold: 1,
			numbersToExpressions: true,
			simplify: false,
			stringArrayShuffle: true,
			splitStrings: true,
			stringArrayThreshold: 1
		}
	);
}
async function uglifyJS(code) {
	return await UglifyJS.minify(code);
}
async function beautifyJs(code) {
	return await beautify.js.beautify(code);
}
async function beautifyCSS(code) {
	return await beautify.css.beautify(code);
}
async function beautifyHTML(code) {
	return await beautify.html.beautify(code);
}

module.exports = {morece_encode,decode_morece,jsObfuscate,uglifyJS,beautifyJs,beautifyCSS,beautifyHTML};
