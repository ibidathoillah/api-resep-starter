
const takjilService = require('../internal/takjil/takjilService')

const lihatTakjil = (req,res)=>{ // arrow function
    let query = req.query
    let message = query.message

    message != null 
    ? res.status(200).send(takjilService.checkTakjil(message))
    : res.status(400).send({ error: 'Bad Request' }) 
}

const detailTakjil = (req,res)=>{ // arrow function
    let query = req.query
    let message = query.message

    message != null 
    ? res.status(200).send(takjilService.detailTakjil(message))
    : res.status(400).send({ error: 'Bad Request' }) 
}

module.exports = { lihatTakjil , detailTakjil }