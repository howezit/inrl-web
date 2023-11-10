/*const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const googleTTS = require('google-tts-api');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath)

const convertTextToSound = async (text, lang) => {
  try {
    const options = {
      lang: lang,
      slow: false,
      host: 'https://translate.google.com'
    };

    const audioBase64Array = await googleTTS.getAllAudioBase64(text, options);
    const base64Data = audioBase64Array.map((audio) => audio.base64).join();
    const fileData = Buffer.from(base64Data, 'base64');
    fs.writeFileSync('tts.mp3', fileData, { encoding: 'base64' });

    return new Promise((resolve) => {
      ffmpeg('tts.mp3')
        .audioCodec('libopus')
        .save('tts.opus')
        .on('end', async () => {
          resolve(fs.readFileSync('tts.opus'));
        });
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {convertTextToSound};
*/
