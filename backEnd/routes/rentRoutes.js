const express = require("express")
const router = express.Router()

const {createRents} = require("../controllers/rentController")

router.route('/createrent').post(createRents)

module.exports = router