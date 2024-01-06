require('../settings');
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const {
    gpt6,
    reddit,
    download,
    xvideosDown,,
    ai_image,
    Insta,
    getFBInfo,
    attp,
    ttp
} = require('../lib');
let router = express.Router()


router.get('/attp', async (req, res) => {
    let id = req.query.text;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'give me a text!'
    })
    const data = await attp(id);
    return res.end(data);
})

router.get('/ttp', async (req, res) => {
    let id = req.query.text;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'give me a text!'
    })
    const data = await ttp(id);
    return res.end(data);
})



router.get('/fb', async (req, res) => {
    let id = req.query.url;
    try {
        if (!id) return res.json({
            status: false,
            creator: `${creator}`,
            message: "need url to conver ty o ldn"
        })
        return await res.json(
            {status: true,creator,result: await getFBInfo(id)}
        )
    } catch (e) {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "upgrade required"
        });
    }
})


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

router.get('/insta', async (req, res, next) => {
    let id = req.query.url;
    try {
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need url to get instagaram result"
        });
        let a = await Insta(id)
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: a
        });
    } catch (e) {
        console.log(e);
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});

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



router.get('/apk/download', async (req, res, next) => {
    try {
        let id = req.query.query;
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need query"
        });
        let ress = await download(id);
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: ress
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});


router.get('/xvideos/download', async (req, res, next) => {
    let text = req.query.url;
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "need url"
    });
    let rslt = await xvideosDown(text);
    res.json({
        status: true,
        creator: `${creator}`,
        result: rslt
    });
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
