const UglifyJS = require("uglify-js");
const beautify = require('js-beautify/js')
const JavaScriptObfuscator = require('javascript-obfuscator');
const {deobfuscate} = require('djs');

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
	const res = await JavaScriptObfuscator.obfuscate(
		code, {
			compact: true,
			controlFlowFlattening: false,
			numbersToExpressions: true,
			simplify: false,
			stringArrayShuffle: true,
			stringArray: true,
			splitStrings:true,
			seed: 1,
                        optionsPreset: 'high-obfuscation',
			stringArrayThreshold: 1,
                        disableConsoleOutput: false,
                        target: 'node',
                        deadCodeInjection: false,
			'string-array-wrappers-type': 'variable',
			identifierNamesGenerator: 'mangled'

		}
	);
	return await res.getObfuscatedCode()
}
async function deobfuscateJS(code) {
	try {
		return await deobfuscate(code);
	} catch (e){
		return "Error"
	}
}
async function uglifyJS(code) {
	return await UglifyJS.minify(code).code;
}
async function beautifyJs(code) {
	return await beautify.js(code);
}
async function beautifyCSS(code) {
	return await beautify.css(code);
}
async function beautifyHTML(code) {
	return await beautify.html(code);
}

module.exports = {morece_encode,decode_morece,jsObfuscate,deobfuscateJS,uglifyJS,beautifyJs,beautifyCSS,beautifyHTML};
