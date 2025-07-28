// routes/product.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// ADD new product (Admin)
router.post("/add", async (req, res) => {
  try {
    const { name, quantity, price, category, description } = req.body;
    const newProduct = new Product({ name, quantity, price, category, description });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

// GET all products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

module.exports = router;
