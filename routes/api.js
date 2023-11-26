require('../settings');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
const isGmail = require('is-gmail');
const ct = require('countries-and-timezones');
const axios = require('axios');
const check = require('inrl-bot-md');
const qs = require("qs");
const cheerio = require('cheerio');
const fancy = require('../lib/fancy');
const mem = require('../lib/memes');
const country = require('../lib/country.json');
const {
    igstalk,
    gpt6,
    reddit,
    search,
    download,
    xvideosSearch,
    xvideosDown,
    ytv,
    news24,
    ai_image,
    gis,
    BufferToFile,
    gpt5,
    lyrics,
    ChatCompletion,
    createT3nsorResponse,
    ocrSpace,
    chatGPT,
    generateV2,
    generate,
    Insta
} = require('../lib');
const truecallerjs = require('truecallerjs');
const {
    facebook,
    tiktok
} = require('mumaker');
const {
    phone
} = require('phone');
let TinyURL = require('tinyurl');
let router = express.Router()
let options = {
    root: path.join()
}
const getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (err) {
        return err
    }
}
const datauri = require('datauri');
//insta
router.get('/country_info', async (req, res) => {
    let id = req.query.code;
    try {
        if (!id) return res.json({
            status: false,
            creator: `${creator}`,
            message: "give me a country code"
        })
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
        return res.json({
            status: false,
            creator: `${creator}`,
            message: e
        });
    }
})

router.get('/checkword', async (req, res) => {
    let id = req.query.text;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: false
    })
    return res.json({
        status: true,
        creator: `${creator}`,
        result: check(id)
    })
})

router.get('/news24', async (req, res) =>{
    return await res.json({
        status: true,
        creator: `${creator}`,
        result: await news24()
    })
})

router.get('/ig', async (req, res) => {
    let id = req.query.name;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'give me a name!'
    })
    const data = await igstalk(id);
    return res.json({
        creator: `${creator}`,
        result: data
    })
})

router.get('/truecaller', async (req, res, next) => {
    let number = req.query.number;
    let key = req.query.key;
    try {
        if (!key) return res.json({
            status: false,
            creator: `${creator}`,
            message: "request filed with status code 403"
        })
        if (!number) return res.json({
            status: false,
            creator: `${creator}`,
            message: "need phone number to get their data"
        })
        if (!number.replace(/[^0-9]/g, '')) return res.json({
            status: false,
            creator: `${creator}`,
            message: "need phone number to get their data"
        })
        if (number.replace(/[^0-9]/g, '').length < 10) return res.json({
            status: false,
            creator: `${creator}`,
            message: "need phone number to get their data"
        });
        let perfix = phone("+" + number);
        let searchData = {
            number: number.toString(),
            countryCode: perfix.countryIso2,
            installationId: key,
        }
        let sn = await truecallerjs.search(searchData);
        let rslt = sn.json();
        if (!rslt.data) return res.json({
            status: false,
            creator: `${creator}`,
            message: "request filed with status code 503"
        })
        if (req.query.bulkresult) {
            const {
                name,
                score,
                access,
                enhanced,
                phones,
                addresses
            } = rslt.data[0];
            const {
                e164Format,
                numberType,
                nationalFormat,
                dialingCode,
                countryCode,
                carrier,
                type
            } = phones[0];
            const {
                city,
                timeZone
            } = addresses[0];
            return res.json({
                status: true,
                creator: `${creator}`,
                name,
                score,
                access,
                enhanced,
                e164Format,
                numberType,
                nationalFormat,
                dialingCode,
                countryCode,
                carrier,
                type,
                city,
                timeZone
            });
        }
        res.json({
            status: true,
            creator: `${creator}`,
            name: `${rslt.data[0].name}`,
            score: `${rslt.data[0].score}`,
            "alternativeName": `${rslt.data[0].altName}`,
            "access": `${rslt.data[0].access}`,
            "type": `${rslt.data[0].phones[0].numberType}`,
            "country": `${rslt.data[0].phones[0].countryCode}`,
            "carrier": `${rslt.data[0].phones[0].carrier}`,
            "city": `${rslt.data[0].addresses[0].city}`,
            "timeZone": `${rslt.data[0].addresses[0].timeZone}`,
            format: `${rslt.data[0].phones[0].nationalFormat}`
        });
    } catch (e) {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request filed with status code 503"
        })
    }
})
router.get('/qrcode', async (req, res) => {
    let id = req.query.text;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: "need text to conver qrcode"
    })
    res.set({
        'Content-Type': 'image/png'
    })
    return await res.end(await QRCode.toBuffer(id, {
        errorCorrectionLevel: "H",
        width: 640,
        color: {
            dark: '#000000', // black dots
            light: '#FFFFFF' // white background
        }
    }))
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
router.get('/chatgpt', async (req, res) => {
    let id = req.query.text;
    try {
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need text to get ai result"
        });
        //const response = await createT3nsorResponse(id);
        //const res_msg = response.json().choices[0].text;
        //const res_msg = await gpt5(id);
        let res_msg = await gpt6(id);
        res_msg = res_msg.reply;
        //const res_msg = await ChatCompletion.create(id);
        //const res_msg = await chatGPT(id);
        //let res_msg = await generateV2(id,'gpt-3.5-turbo');res_msg = res_msg.data;
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: res_msg
        });
    } catch (e) {
        console.log(e);
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "request filed with status code 404 'Too many request'"
        })
    }
});

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
router.get('/fb', async (req, res, next) => {
    let id = req.query.url;
    try {
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need url to get fb result"
        });
        let {
            description,
            urls
        } = await facebook(id);
        let obj = {
            status: true,
            creator,
            url: urls[0].url,
            description
        }
        return await res.send(obj);
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: e
        });
    }
});

router.get('/tiktok', async (req, res, next) => {
    let id = req.query.url;
    try {
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need url to get fb result"
        });
        let {
            author,
            description,
            media,
            music,
            like,
            comment,
            share
        } = await tiktok(id);
        let obj = {
            author,
            description,
            status: true,
            creator,
            video: media,
            audio: music,
            like,
            comment,
            share
        }
        return await res.send(obj);
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "Timed Out"
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

router.get('/apk/search', async (req, res, next) => {
    try {
        let id = req.query.query;
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need query"
        });
        let ress = await search(id);
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
router.get('/reddit', async (req, res, next) => {
    try {
        let id = req.query.query;
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need query"
        });
        let ress = await reddit(id);
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
router.get('/lyrics', async (req, res, next) => {
    try {
        let id = req.query.text;
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "give me a song name"
        });
        const ress = await lyrics(id);
        if (!ress) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 403!"
        });
        res.json({
            status: true,
            creator: `${creator}`,
            result: ress
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 403!"
        });
    }
});
router.get('/fancy', async (req, res, next) => {
    let text = req.query.text,
        key = req.query.key;
    if (!text) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "need text and key to getfancy result ex:- '/fancy?text=hi&key10' "
    });
    if (!key) {
        let ress = fancy.list(text, fancy);
        return res.json({
            status: false,
            creator: `${creator}`,
            result: ress
        });
    }
    try {
        if (key > 33) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "key must been below 33"
        });
        let result = fancy.apply(fancy[`${key}` - 1], text)
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: result
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});
router.get('/xvideos/search', async (req, res, next) => {
    let text = req.query.text;
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "need text to search"
    });
    let rslt = await xvideosSearch(text);
    res.json({
        status: true,
        creator: `${creator}`,
        result: rslt
    });
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
router.get('/gis', async (req, res, next) => {
    let text = req.query.text,
        key = req.query.count || "1";
    try {
        if (!text) return res.json({
            status: false,
            creator: `${creator}`,
            message: "need text, ex:- '/gis?text=hi&count=2' "
        });
        let ress = await gis(text, key);
        res.json({
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
})
router.get('/validmail', async (req, res, next) => {
    let text = req.query.mail;
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "NEDDmail,? mail="
    });
    let ress = await isGmail(text);
    res.json({
        status: true,
        creator: `${creator}`,
        result: ress
    });
})
router.get('/validword', async (req, res, next) => {
    let text = req.query.word;
    try {
        if (!text) return res.json({
            status: false,
            creator: `${creator}`,
            message: "give me a word"
        });
        const words = checkWord('en'); // setup the language for check, default is en

        const result = words.check(text);
        return res.json({
            status: true,
            creator: `${creator}`,
            result
        });
    } catch (e) {
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: true
        });
    }
})
router.get('/datauri', async (req, res, next) => {
    let text = req.query.url;
    if (!text) return res.json({
        status: false,
        creator: `${creator}`,
        message: "please provide an url to convert /datauri?url=<url>"
    });
    const file = await BufferToFile(text, "./img.jpeg");
    const content = await datauri(file);
    res.json({
        status: true,
        creator: `${creator}`,
        result: content
    });
})
router.get('/ocr', async (req, res, next) => {
    try {
        let id = req.query.url;
        if (!id) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "give me a url"
        });
        const ress = await ocrSpace(id);
        const a = JSON.parse(JSON.stringify(ress))
        if (!a.ParsedResults[0].ParsedText) return await res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 403!"
        });
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: a.ParsedResults[0].ParsedText
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 401!"
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


router.get('/getmail', async (req, res, next) => {
    let id = req.query.apikey;
    if (id != apikey) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "invalid api_key"
    });
    try {
        const {
            data
        } = await axios("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: data
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "log handler error!"
        });
    }
});

router.get('/getmailinfo', async (req, res, next) => {
    let id = req.query.apikey,
        mail = req.query.email;
    if (id != apikey) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "invalid api_key"
    });
    if (!mail) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a mail"
    });
    try {
        const [name, dom] = mail.split('@');
        const {
            data
        } = await axios(`https://www.1secmail.com/api/v1/?action=getMessages&login=${name}&domain=${dom}`);
        let unique_id = []
        let response = [];
        data.map((id) => unique_id.push(id.id));
        unique_id.map(async (id) => {
            const {
                data
            } = await axios(`https://www.1secmail.com/api/v1/?action=readMessage&login=${name}&domain=${dom}&id=${id}`);
            let {
                from,
                subject,
                date,
                body,
                textBody,
                htmlBody
            } = data;
            return response.push({
                from,
                subject,
                date,
                body,
                text: textBody || "null",
                html: htmlBody
            });
        });
        setTimeout(async () => {
            return await res.json({
                status: true,
                creator: `${creator}`,
                result: response
            });
        }, 500);
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "log handler error!"
        });
    }
});

module.exports = router
