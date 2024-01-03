creator = 'inrl'
apikey = "inrl"
upi_id = 'fasweehmon2@okicici';
upi_name = 'Fasweeh Mon';
url = `https://inrl-web-fkns.onrender.com`;
git_id = `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`;
tokens = ['toup','acrc','with_you'];
session = 'https://gist.github.com/inrl-md/';
support = 'https://chat.whatsapp.com/K61qQwFg00L2xOlqZqzoNn';


//_______________________ ┏  Apikey  ┓ _______________________\\
imgbb = "76a050f031972d9f27e329d767dd988f" || "deb80cd12ababea1c9b9a8ad6ce3fab2";
imgur = '3ca8036b07e0f25';


//message.events({});//
start = ''
block = ['918113921898','917034892686'];
update = {
    key:"poll",
    message:{
        text: "*follow me on github*",
        contextInfo: {
		externalAdReply:{
			sourceUrl: "https://github.com/inrl-official?tab=repositories",
			title:"suggests!"
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
