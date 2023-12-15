const router = require("express").Router();
const userController = require("../controllers/userController");

router
    .route("/createUser")
    .post((req, res) => userController.createUser(req, res));

router
    .route("/login")
    .post((req,res) => userController.login(req,res));
    

router
    .route("/updateUser")
    .put((req,res) => userController.editUser(req,res));

router
    .route("/deleteUser")
    .delete((req,res) => userController.deleteUser(req,res));

router
    .route("/getUserById/:id")
    .get((req,res) => userController.getUserBydId(req,res));
    
module.exports = router;