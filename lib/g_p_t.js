const axios = require("axios");

const chatGPT = async (text) => {
  try {
    const { data } = await axios(`https://www.aitianhu.com/api/chat-process`, {
      method: "post",
      data: {
        prompt: text,
        options: {},
        temperature: 0.8,
        top_p: 1,
      },
      headers: {
        accept: "*/*",
        "content-type": "application/json",
      },
    });
    let clr = data.split('content":"');
    let resu = clr.map((rs) => rs.split('"},"index"')[0].split('delta":{"')[0]);
    let twt = resu.map((s) => s.split('"},"finish_reason"')[0]);
    let stringText = twt.map((s) => s.split('index":0,'));
    stringText.splice(0, 1);
    const result = stringText.join("").replace(/\\n/g, "\n").replace(/\\/g, "");
    console.log(result);
    return result;
  } catch {
    const result = {
      status: false,
      message: "Unknown error",
    };
    console.log(result);
    return result;
  }
};
module.exports={chatGPT};
