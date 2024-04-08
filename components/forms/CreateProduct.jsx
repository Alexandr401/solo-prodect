const React = require('react');
const Layout = require('../Layout');
function CreateProduct({ user, basketCatalog}) {
    return (
        <Layout title='Добавление Продукта' user={user} basketCatalog={basketCatalog}>
            <div className="page">
            <section className="section-create-product">
                <div className="container">
                    <div className="section-header">
                        <div className="section-header-title">
                            <h1 className="title">Добавить продукт</h1>
                        </div>
                    </div>
                    <div className="section-content-create-product">
                        <form className="form-create-product" name="createProduct-form">
                            <label>Название продукта:</label><br />
                            <input name="name" type="text" required /><br />
                            <label>Изображение подукта (URL):</label><br />
                            <input name="img" type="text" required /><br />
                            <label>Категория продукта: </label><br />
                            <p><select name="category">
                                <option>Стол</option>
                                <option>Кровать</option>
                                <option>Диван</option>
                                <option>Шкаф</option>
                                <option>Тумба</option>
                                <option>Стул</option>
                                <option>Кресло</option>
                            </select></p>
                            <label>Описание продукта: </label><br />
                            <input name="description" type="text"/><br />
                            <label>Атрибут продукта: </label><br />
                            <input name="attribute" type="text"/><br />
                            <label>Цена продукта: </label><br />
                            <input name="price" type="text"/><br />
                            <button type="submit" className="create-product-btn">Создать</button>
                        </form>
                    </div>
                </div>
            </section>
            </div>
            <script defer src="/js/createProduct.js"></script>
        </Layout>
    );
}
module.exports = CreateProduct;