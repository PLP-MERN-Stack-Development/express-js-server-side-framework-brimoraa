import { v4 as uuidv4 } from "uuid";

let products = [];

export const getAllProducts = (req, res) => {
  const { category, page = 1, limit = 5 } = req.query;
  let filtered = [...products];

  if (category) filtered = filtered.filter(p => p.category === category);

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + Number(limit));

  res.json({ total: filtered.length, products: paginated });
};

export const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const createProduct = (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

export const deleteProduct = (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: "Product deleted successfully" });
};

export const searchProducts = (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ message: "Name query required" });
  const results = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(results);
};
