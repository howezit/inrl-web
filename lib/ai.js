const axios = require("axios")
const {GoogleGenerativeAI} = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI('AIzaSyDY-V-aEW2stSFLISS43mv29_A8n0OZRdM');


async function gimini(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function gpt(text) {
  try {
    const { data } = await axios(`https://onlinegpt.org/wp-json/mwai-ui/v1/chats/submit`, {
      method: "post",
      data: {
        botId: "default",
        newMessage: text,
        stream: false
      },
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json"
      }
    });
    return data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data.message
  }
}
module.exports = {gpt,gimini}
