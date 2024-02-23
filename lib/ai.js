const axios = require("axios")
const {GoogleGenerativeAI} = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI('AIzaSyDY-V-aEW2stSFLISS43mv29_A8n0OZRdM');


async function gemini(prompt) {
  try {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
    } catch (err) {
    return err;
  }
}

async function gpt(text) {
  try {
    const { data } = await axios(`https://aemt.me/gpt4?text=${text}`);
    return data.result;
  } catch (err) {
    return err.response.data;
  }
}
async function stableDiffusion(text) {
  try {
    return `https://aemt.me/stablediffusion?text=${text}`;
  } catch (err) {
    return err.response.data;
  }
}

async function bardAi(query) {
  try {
  const {data} = await axios(`https://aemt.me/bard?text=${query}`);
  return data.result;
    } catch(e) {
   return e.response;
  }
}
async function Bing(query) {
  try{
    let {data} = await axios(`https://aemt.me/bingimg?text=${query}`);
    return data.result;
  } catch(e) {
   return e.response;
  }
}

module.exports = {gpt,gemini,stableDiffusion,bardAi,Bing}
