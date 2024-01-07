require('../settings');
__path = process.cwd()
const express = require('express');
const path = require('path');
const fs = require('fs');
const {io} = require('../index');
let localStrategy = require('passport-local').Strategy;
const passport = require('passport');

const axios = require('axios');
const cheerio = require('cheerio');
const {
	getLogin,
	saveLogin
} = require('../lib');
let router = express.Router()
router.get('/csrf', async (req, res, next) => {
	return res.send(req.csrfToken());
})

router.get('/sign', async (req, res, next) => {
	res.sendFile(__path + '/view/loginapi.html')
	io.emit('csrf', req.csrfToken());
})

passport.use(new localStrategy({
	usernameField: 'key'
}, async (key, password, done) => {
	const exist = await getLogin(key);
	if (!exist) return done(null, false);
	return done(null, exist);
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
	user.findById(id, function(err, user) {
		done(err, user);
	});
});

router.get('/events', async (req, res, next) => {
	const trylogin = req.query.id;
	const trysaved = req.query.key;
	if (trylogin) {
		await saveLogin(trylogin);
		res.redirect('/api/events?key=events');
	} else if (trysaved) {
		req.body.key = trysaved;
		passport.authenticate('local', {
			failureRedirect: '/login',
			successRedirect: '/docs',
			failureFlash: true,
		})(req, res, next);
	} else {
		res.redirect('/api/dashboard');
	}
})


router.get('/phone', async (req, res, next) => {
    let id = req.query.number;
    if (!id) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "need  text  to get ttp"
    });
    try {
        const perfix = phone("+" + id);
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: perfix.countryIso2.toString()
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});
router.get('/zone', async (req, res, next) => {
    let id = req.query.code;
    if (!id) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "need  text  to get ttp"
    });
    try {
        const country = ct.getCountry(id);
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: country.timezones[0].toString()
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});


module.exports = router
