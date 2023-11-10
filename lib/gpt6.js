const axios = require("axios")

async function gpt6(text) {
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
    })
    console.log('😫😫😫');
    console.log(data);
    return data
  } catch (err) {
    console.log('😉😉😉');
    console.log(err.response.data)
    return err.response.data.message
  }
}
module.exports = {gpt6}
