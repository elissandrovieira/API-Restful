const router = require('express').Router()

router.get('/customers', (req, res) => {
    res.send({
        ok: 123
    })
})

module.exports = router