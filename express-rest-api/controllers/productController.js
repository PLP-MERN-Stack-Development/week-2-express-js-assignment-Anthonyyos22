const { products } = require('../models/products');
const { NotFoundError } = require('../utils/customErrors');
const { v4: uuidv4 } = require('uuid');

exports.getProducts = (req, res, next) => {
  res.json(products);
};

exports.getProductById = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) throw new NotFoundError('Product not found');
  res.json(product);
};

exports.createProduct = (req, res, next) => {
  const { name, price, description, category, inStock } = req.body;
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ message: 'Name and valid price are required.' });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    price,
    description: description || '',
    category: category || 'general',
    inStock: inStock !== undefined ? inStock : true
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) throw new NotFoundError('Product not found');

  const { name, price, description, category, inStock } = req.body;

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  if (description !== undefined) product.description = description;
  if (category !== undefined) product.category = category;
  if (inStock !== undefined) product.inStock = inStock;

  res.json(product);
};

exports.deleteProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) throw new NotFoundError('Product not found');

  products.splice(index, 1);
  res.status(204).send();
};
