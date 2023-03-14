import express from 'express';
import routers from './routers';

const app = express();

app.use(express.json());

app.use('/products', routers.productsRouter);
app.use('/users', routers.usersRouter);
app.use('/orders', routers.ordersRouter);

export default app;
