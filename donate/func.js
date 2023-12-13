require('../settings');
const QRCode = require("qrcode");

const generateURL = ({ amount }) => {
  return `upi://pay?pa=${upi_id}&pn=${upi_name}&am=${amount}&cu=INR`;
};

async function genrateQR(url) {
const qrCode = await QRCode.toDataURL(url, {
    type: "image/png",
    margin: 1,
    width: 300,
  });
  return Buffer.from(qrCode.match(/^data:.+\/(.+);base64,(.*)$/)[2], 'base64');
}
module.exports = {generateURL, genrateQR}
