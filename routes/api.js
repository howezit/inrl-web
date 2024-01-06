require('../settings');
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const {
    download,
    xvideosDown,
    ai_image,
    Insta,
    getFBInfo,
} = require('../lib');
let router = express.Router()

router.get('/imgai', async (req, res) => {
    let id = req.query.text;
    try {
        if (!id) return res.json({
            status: false,
            creator: `${creator}`,
            message: "need text to conver qrcode"
        })
        return await res.end(
            await ai_image(id)
        )
    } catch (e) {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "upgrade required"
        });
    }
})

router.get('/ssweb', async (req, res, next) => {
    let id = req.query.url;
    try {
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need to get buffer  of the web"
        });
        const base = 'https://www.screenshotmachine.com'
        const param = {
            url: id,
            device: 'desktop',
            cacheLimit: 0
        }
        axios({
            url: base + '/capture.php',
            method: 'POST',
            data: new URLSearchParams(Object.entries(param)),
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(async (data) => {
            const cookies = data.headers['set-cookie']
            if (data.data.status == 'success') {
                axios.get(base + '/' + data.data.link, {
                    headers: {
                        'cookie': cookies.join('')
                    },
                    responseType: 'arraybuffer'
                }).then(async ({
                    data
                }) => {
                    res.set({
                        'Content-Type': 'image/png'
                    })
                    return await res.send(data)
                })
            } else {
                return await res.json({
                    status: false,
                    creator: `${creator}`,
                    message: "need undefined erro found"
                });
            }
        })
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});

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
