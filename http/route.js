const takjilCtrl = require('../controller/takjilCtrl')
const express = require('express')
const app = express()

app.get('/lihat/takjil', takjilCtrl.lihatTakjil)
app.get('/detail/takjil', takjilCtrl.detailTakjil)

module.exports = app