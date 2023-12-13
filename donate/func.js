const QRCode = require("qrcode");

const generateURL = ({ amount }) => {
  return `upi://pay?pa=${upi}&pn=${name}&am=${amount}&cu=INR`;
};

const genrateQR(url) {
const qrCode = await QRCode.toDataURL(url, {
    type: "image/png",
    margin: 1,
    width: 300,
  });
  return Buffers.from(qrCode.match(/^data:.+\/(.+);base64,(.*)$/)[2], 'base64');
}
module.exports = {generateURL, genrateQR}
