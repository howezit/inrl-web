creator = 'inrl'
upi_id = 'fasweehmon2@okicici';
upi_name = 'Fasweeh Mon';
url = `https://inrl-web-fkns.onrender.com`;
git_id = `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`;
tokens = ['toup','acrc','with_you'];
session = 'https://gist.github.com/inrl-md/';
support = 'https://whatsapp.com/channel/0029VaAKCMO1noz22UaRdB1Q';
email_pass = 'fpel bioh wwtc hkce';
logo = `https://i.imgur.com/FmdWDML.jpg`;
api_number = `+16032551591`;

//_______________________ ┏  Apikey  ┓ _______________________\\
imgbb = "76a050f031972d9f27e329d767dd988f" || "deb80cd12ababea1c9b9a8ad6ce3fab2";
imgur = '3ca8036b07e0f25';
apikeys = '31b90e8a8c7c7247751ab2be4c63012d';

//message.events({});//
start = ''
block = ['918113921898','917034892686'];
update = {
    key:"inrn",
    message:{
        text: "*thanks to all💯😵‍💫*",
        contextInfo: {
		externalAdReply:{
			sourceUrl: "thanks",
			title:"some gfx commands added 😅, use and give feedback please!"
		}
	}
    }
}

//_______________________ ┏  Loghandler  ┓ _______________________\\

error400 = (res) => {
        res.statusMessage = "Current password does not match";
	return res.status(400).json({
	status: false,
        code: 400,
        message: 'Service Unavaible',
        maintanied_by: `${creator}`});
}

error503 = (res) => {
        res.statusMessage = "temporarily unavailable!";
	return res.status(503).json({
	status: false,
        code: 503,
        maintanied_by: `${creator}`});
}

error500 = (res, msg) => {
        res.statusMessage = "temporarily unavailable!";
	return res.status(500).json({
	status: false,
        code: 500,
        message: msg,
        maintanied_by: `${creator}`});
}

error200 = (res,msg) => {
	return res.status(200).json({
	status: false,
        code: 200,
        message: msg || 'Internal Server Error!',
        maintanied_by: `${creator}`
	});
}
errorMsg = (res, msg) => {
	return res.status(200).json({
	status: false,
        message: msg,
	creator
	});
}
