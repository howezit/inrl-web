const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function ocrSpace(input, options = {}) {
 try {
 const {
      apiKey, ocrUrl, language, isOverlayRequired,
      detectOrientation, isCreateSearchablePdf,
      isSearchablePdfHideTextLayer, scale, isTable, OCREngine,
    } = options;
    const formData = new FormData();
    formData.append('file', fs.createReadStream(input));
    formData.append('language', String(language || 'eng'));
    formData.append('isOverlayRequired', String(isOverlayRequired || 'false'));
    formData.append('detectOrientation', String(detectOrientation || 'false'));
    formData.append('isCreateSearchablePdf', String(isCreateSearchablePdf || 'false'));
    formData.append('isSearchablePdfHideTextLayer', String(isSearchablePdfHideTextLayer || 'false'));
    formData.append('scale', String(scale || 'false'));
    formData.append('isTable', String(isTable || 'false'));
    formData.append('OCREngine', String(OCREngine || '1'));
    const request = {
      method: 'POST',
      url: 'https://api.ocr.space/parse/image',
      headers: {
        apikey: apiKey,
        ...formData.getHeaders(),
      },
      data: formData,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    };
    const { data } = await axios(request);
    fs.unlinkSync(input);
    return {status: true, message: data.ParsedResults[0].ParsedText};
 } catch(e) {
 return {status: false, message: e};
 }
}

module.exports = {ocrSpace};
