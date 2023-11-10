require('../settings')
const express = require('express')
const {
    textpro,
    photooxy
} = require('../lib');
const router = express.Router();
router.get('/', async (req, res, next) => {
    res.redirect("https://chat.whatsapp.com/D3qKPbtFzidBX8jjPZYUcy");
});
router.get('/pencil', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/glitch', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/blackpink', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/berry', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/neon', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/logobear', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/3dchristmas', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/thunder', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/3dboxtext', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/glitch2', async (req, res, next) => {
    let text1 = req.query.text
    let text2 = req.query.text2
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    if (!text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text2"
    })
    textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1, text2]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/glitchtiktok', async (req, res, next) => {
    let text1 = req.query.text
    let text2 = req.query.text2
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    if (!text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text2"
    })
    textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1, text2]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/video-game-classic', async (req, res, next) => {
    let text1 = req.query.text
    let text2 = req.query.text2
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    if (!text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text2"
    })
    textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [text1, text2]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/marvel-studios', async (req, res, next) => {
    let text1 = req.query.text
    let text2 = req.query.text2
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    if (!text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text2"
    })
    textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1, text2]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/ninja-logo', async (req, res, next) => {
    let text1 = req.query.text
    let text2 = req.query.text2
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    if (!text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text2"
    })
    textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1, text2]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/green-horror', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/magma', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/3d-neon-light', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/3d-orange-juice', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/chocolate-cake', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/strawberry', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/flaming', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/shadow-sky', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/metallic', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/naruto', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/pubg', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    let text2 = req.query.text2
    if (!text2) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text2"
    })
    photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1, text2]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/under-grass', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/harry-potter', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/flower-typography', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/picture-of-love', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/coffee-cup', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/butterfly', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/night-sky', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/carved-wood', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/illuminated-metallic', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
router.get('/sweet-candy', async (req, res, next) => {
    let text1 = req.query.text
    if (!text1) return res.json({
        status: false,
        creator: `${creator}`,
        message: "give me a text"
    })
    photooxy("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", [text1]).then((data) => {
        res.set({
            'Content-Type': 'image/png'
        })
        res.send(data)
    }).catch((err) => {
        return res.json({
            status: false,
            creator: `${creator}`,
            message: "request Failed with StatusCode 503"
        })
    })
})
module.exports = router
