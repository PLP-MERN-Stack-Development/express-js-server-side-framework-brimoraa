# Express.js RESTful API

## 🚀 Setup
```bash
npm install
npm start
```

## 📦 Endpoints
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product by ID |
| POST | /api/products | Create new product (requires API key) |
| PUT | /api/products/:id | Update product (requires API key) |
| DELETE | /api/products/:id | Delete product (requires API key) |

### Example Request
```bash
POST /api/products
Header: x-api-key: 12345
Body:
{
  "name": "Laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}
```

### Example Response
```json
{
  "id": "a7f-234f-445g",
  "name": "Laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}
```
