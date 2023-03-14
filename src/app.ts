import express from 'express';
import routers from './routers';

const app = express();

app.use(express.json());

app.use('/products', routers.productsRouter);

export default app;
