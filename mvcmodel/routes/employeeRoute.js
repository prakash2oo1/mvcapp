const express = require("express");
const controller = require("../controller/apihandler")

const router = express.Router(); //gives routing object

console.log(controller)

 router.route("/getemployee").get(controller.getEmployees);

 router.route("/addemployee").post(controller.addEmployee);

//router.route("/remove/:id").delete(controller.removeemployee);

module.exports = router; 
