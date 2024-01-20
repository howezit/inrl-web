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

async function bardAi(query) {
  const {data} = await axios.post("https://bard.rizzy.eu.org/api/onstage", {
        ask: query
      }, {
        headers: {
          "Content-Type": "application/json"
        }
  });
}
async function Bing(query) {
  let {data} = await axios("https://copilot.github1s.tk/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "dummy",
      "Content-Type": "application/json"
    },
    data: JSON.stringify({
      model: "Creative",
      max_tokens: 64,
      messages: [{
        role: "system",
        content: "You are an helpful assistant."
      }, {
        role: "user",
        content: query
      }]
    })
  });
  return data.choices[0].message.content;
}

module.exports = {gpt,gemini,bardAi,Bing}
