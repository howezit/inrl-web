require('../settings');
const {
	country,
	news24,
	birthDetails,
	addLimit
} = require('../lib');
const express = require('express');
const router = express.Router();
const ct = require('countries-and-timezones');
const {
    phone
} = require('phone');
router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/info.html')
})
router.get('/age', async (req, res, next) => {
	try {
		const id = req.query.dob;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter dob, dob=dd/mm/yy');
		let [a, b, c] = id.split(/[/-]/);
		if (!c) return errorMsg(res, 'invalid format, example: dd/mm/yyyy');
		if (a.length < 2) a = '0' + a;
		if (b.length < 2) b = '0' + b;
		if (c.length != 4) return errorMsg(res, 'invalid format, example: dd/mm/yyyy');
		const date = `${c}-${b}-${a}`;
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: birthDetails(date)
		});
	} catch (e) {
		return error200(res);
	}
});
router.get('/country', async (req, res) => {
	try {
		const id = req.query.code;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter code');
		let d = {}
		for (let key in country) {
			if (key = id.toUpperCase()) {
				d.id = country[key].id;
				d.name = country[key].name;
				d.language = country[key].language;
				d.capital = country[key].capital;
				d.currency = country[key].currency;
				d.famous_us = country[key].famous_us;
				d.constitutional_form = country[key].constitutional_form;
				d.language_codes = country[key].language_codes;
				d.neighbors = country[key].neighbors;
				d.image = country[key].image;
				d.flag = country[key].flag;
				d.phoneCode = country[key].phoneCode;
				d.times = [];
				d.date = new Date().toLocaleDateString("EN", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
				});
				country[key].timezones.map(zone => {
					d.times.push({
						time: new Date().toLocaleString("LK", {
							timeZone: zone
						}).split(" ")[1],
						zone: zone
					});
				});
				break;
			}
		}
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: d
		});
	} catch (e) {
		return error200(res);
	}
})

router.get('/news24', async (req, res) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await news24()
		})
	} catch (e) {
		return error200(res);
	}
});
router.get('/phone', async (req, res, next) => {
	try {
		const id = req.query.number;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter number');
		const perfix = phone("+" + id);
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: perfix.countryIso2.toString()
		});
	} catch (e) {
		return error200(res);
	}
});
router.get('/zone', async (req, res, next) => {
	try {
		const id = req.query.code;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter code');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: ct.getCountry(id.toUpperCase().trim()).timezones
		});
	} catch (e) {
		return error200(res);
	}
});

module.exports = router
