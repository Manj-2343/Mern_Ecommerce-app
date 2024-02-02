import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
//create Products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//update Products
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//get Products
router.get("/get-product", getProductController);
//single products
router.get("/get-product/:slug", getSingleProductController);
//get Photo
router.get("/product-photo/:pid", productPhotoController);
//delete products
router.delete("/delete-product/:pid", deleteProductController);
//filter Products
router.post("/product-filter",productFilterController)
//product Count
router.get("/product-count",productCountController);
//product Per page
router.get("/product-list/:page",productListController);
//search Product
router.get("/search/:keyword",searchProductController);
//similar product
router.get(`/related-products/:pid/:cid`,relatedProductController)
//Category wise Product
router.get("/product-category/:slug",productCategoryController)
//payment routes
//token
router.get("/braintree/token",braintreeTokenController)

//payments
router.post("/braintree/payment",requireSignIn,braintreePaymentController)
export default router;
