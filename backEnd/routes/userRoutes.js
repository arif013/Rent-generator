const express = require("express")
const router = express.Router()

const {createUsers, getUsers} = require("../controllers/userController")

router.route('/createuser').post(createUsers)
router.route('/getusers').get(getUsers)

module.exports = router