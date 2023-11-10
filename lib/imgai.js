const axios = require('axios');
const apiKey = "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";

async function ai_image(text) {
const {data} = await axios(
            "https://api-inference.huggingface.co/models/prompthero/openjourney",
            {
                method: "POST",
                responseType: 'arraybuffer',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                data: JSON.stringify({ inputs: text }),
            }
        );
  return data;
}
module.exports = {ai_image};
