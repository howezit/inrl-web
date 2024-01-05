require('../settings');
const {
	country,
	news24,
	birthDetails,
	addLimit,
	checkkey
} = require('../lib');
const express = require('express');
const router = express.Router();
const keys = inrlkeys.map(a => a.k);

router.get('/age', async (req, res, next) => {
	try {
		const id = req.query.dob;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!id) return errorMsg(res, 'missing parameter dob, dob=dd/mm/yy');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: birthDetails(id)
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
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
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
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
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
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
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
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!id) return errorMsg(res, 'missing parameter code');
		const country = ct.getCountry(id);
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: country.timezones[0].toString()
		});
	} catch (e) {
		return error200(res);
	}
});

module.exports = router
