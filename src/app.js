
const express = require('express');
const Cartrouter = require('./routes/carts.routes.js')
const ProductsRouter = require('./routes/products.router.js');
const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", ProductsRouter);
app.use("/api/carts", Cartrouter);
const server = app.listen(PORT, () => {
    console.log(`express localhost: ${server.address().port}`)
})
