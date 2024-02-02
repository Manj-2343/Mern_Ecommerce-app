import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//Register || Method POST method
router.post("/register", registerController);
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password",forgotPasswordController)

//test routes
router.get("/test",requireSignIn,isAdmin, testController);

//protected user-route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
  res.status(200).send({ok:true});
})
//protected admin-route auth
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
  res.status(200).send({ok:true});
})
//update Profile
router.put("/profile",requireSignIn,updateProfileController)
//orders
router.get("/orders",requireSignIn,getOrdersController)
// all orders
router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController)
//order status  updates
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController )
export default router;
