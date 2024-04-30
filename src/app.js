import express from 'express';
import { ProductRouter } from './routes/products.router.js';
import { CartRouter } from './routes/carts.routes.js';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const server = app.listen(PORT, () => {
    console.log(`express localhost: ${server.address().port}`)
})

app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);