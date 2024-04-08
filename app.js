require('@babel/register');
require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const homeRouter = require('./routes/views/home.routes');

const authViewRouter = require('./routes/views/auth.routes');
const authRouter = require('./routes/api/auth.routes');

const Catalog = require('./routes/views/catalog.routes');

const FurnitureViewRouter = require("./routes/views/furniture.routes");
const Comment = require("./routes/api/comments.routes");

const BasketViewRouter  = require("./routes/views/basket.routes");
const Basket = require("./routes/api/basket.routes");

const Profile = require("./routes/views/profile.routes");

const CreateProductViewRouter = require("./routes/views/createProduct.routes");
const createProduct = require("./routes/api/createProduct.routes");

const editProductAllViewRouter = require("./routes/views/editProductAll.routes");
const EditProductViewRouter  = require("./routes/views/editProduct.routes")
const EditProduct = require("./routes/api/editProduct.routes")

const PageNotFound = require("./components/pages/PageNotFound")

const app = express();
serverConfig(app);
const PORT = 3000;


app.use('/', homeRouter);
app.use('/auth', authViewRouter);
app.use('/api/auth', authRouter);

app.use('/', Catalog);
app.use('/catalog', FurnitureViewRouter);
app.use('/api/comment', Comment);

app.use('/basket', BasketViewRouter);
app.use('/api/catalog', Basket);

app.use('/profiles', Profile);

app.use('/', CreateProductViewRouter);
app.use('/api/', createProduct);

app.use('/', editProductAllViewRouter);
app.use('/edit-product', EditProductViewRouter);
app.use('/api/edit-product', EditProduct)

app.get("*", (req, res) => {
    res.status(404).send(res.renderComponent(PageNotFound));
  });

app.listen(PORT, console.log(`Server is up on ${PORT} port`));