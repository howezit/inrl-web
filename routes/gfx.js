require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {gfx1, gfx2, gfx3, gfx4, gfx5, gfx6, gfx7, gfx8} = require('../lib');


router.post('/gfx1', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border) return error503(res);
  const file = await gfx1({path, text, color, border});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx2', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border) return error503(res);
  const file = await gfx2({path, text, color, border});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx3', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border) return error503(res);
  const file = await gfx3({path, text, color, border});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx4', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const bg = req.body.bg;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border  || !bg) return error503(res);
  const file = await gfx4({path, text, color, border, bg});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx5', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const bg = req.body.bg;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border || !bg) return error503(res);
  const file = await gfx5({path, text, color, border, bg});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx6', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const style = req.body.style;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border || !style) return error503(res);
  const file = await gfx6({path, text, color, border, style});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx7', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const style = req.body.style;
  const color = req.body.color;
  const border = req.body.border;
  const text2 = req.body.text2;
  if(!path || !text || !color || !border || !style) return error503(res);
  const file = await gfx7({path, text, color, border, style, text2});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx8', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const style = req.body.style;
  const color = req.body.color;
  const border = req.body.border;
  const text2 = req.body.text2;
  if(!path || !text || !color || !border || !style) return error503(res);
  const file = await gfx8({path, text, color, border, style, text2});
  return await res.json({url: 'https://' + req.hostname + file});
});


module.exports = router
