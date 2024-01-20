const axios = require("axios")
const {GoogleGenerativeAI} = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI('AIzaSyDY-V-aEW2stSFLISS43mv29_A8n0OZRdM');


async function gemini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function gpt(text) {
  try {
    const { data } = await axios(`https://aemt.me/gpt4?text=${text}`);
    return data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data;
  }
}
async function stableDiffusion(text) {
  try {
    return `https://aemt.me/stablediffusion?text=${text}`;
  } catch (err) {
    console.log(err.response.data)
    return err.response.data;
  }
}

async function bardAi(query) {
  const {data} = await axios.post(`https://aemt.me/bard?text=${query}`);
  return data.result;
}
async function Bing(query) {
  let {data} = await axios(`https://aemt.me/bingimg?text=${query}`);
  return data.result;
}

module.exports = {gpt,gemini,stableDiffusion,bardAi,Bing}
