
# Express REST API (Week 2 Assignment)

A simple RESTful API built with **Express.js** that manages an **in-memory list of products**.

---

## 📌 Features

- ✅ In-memory product store (no database required)
- ✅ CRUD operations: Create, Read, Update, Delete products
- ✅ Basic authentication middleware (dummy token)
- ✅ Request validation for product data
- ✅ Request logging middleware
- ✅ Custom error handling middleware
- ✅ Organized structure: routes, controllers, middleware, models

---

## 📂 Project Structure

```
express-rest-api/
│
├── server.js               # Main Express server
├── routes/
│   └── productRoutes.js    # API routes for products
├── controllers/
│   └── productController.js # Product logic (CRUD)
├── models/
│   └── products.js         # In-memory product data
├── middleware/
│   ├── logger.js           # Request logger
│   ├── auth.js             # Simple authentication middleware
│   ├── validateProduct.js  # Request body validator
│   └── errorHandler.js     # Centralized error handling
├── utils/
│   └── customErrors.js     # Custom error classes
├── .env                    # Environment variables (optional)
├── package.json
└── README.md
```

---

## 🚀 How to Run

1️⃣ **Clone the repo**

```bash
git clone <your-repo-url>
cd express-rest-api
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Run the server**

```bash
npm run dev
```

✅ Your API runs at [http://localhost:5000](http://localhost:5000)

---

## 🔐 Authentication

- Protected routes require an `Authorization` header:
  ```
  Authorization: Bearer secret-token
  ```

---

## 🔑 API Endpoints

| Method | Endpoint             | Description               | Auth Required |
|--------|----------------------|---------------------------|---------------|
| GET    | `/api/products`      | Get all products          | ❌ No         |
| GET    | `/api/products/:id`  | Get a product by ID       | ❌ No         |
| POST   | `/api/products`      | Create new product        | ✅ Yes        |
| PUT    | `/api/products/:id`  | Update a product by ID    | ✅ Yes        |
| DELETE | `/api/products/:id`  | Delete a product by ID    | ✅ Yes        |

---

## ✅ Sample Request

**Create a product**
```bash
curl -X POST http://localhost:5000/api/products \
-H "Content-Type: application/json" \
-H "Authorization: Bearer secret-token" \
-d '{"name": "New Product", "price": 99.99}'
```

---

## 📌 Notes

- This version uses an **in-memory array** — data is reset when you restart the server.
- Ready to switch to MongoDB later — just replace the in-memory logic with Mongoose.

---

## 🎓 Author

**Joseph Kiama** — Week 2 Node/Express Assignment  
