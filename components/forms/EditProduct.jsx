const React = require('react');
const Layout = require('../Layout');
function EditProduct({ catalogs = [], user, basketCatalog }) {
    return (
        <Layout title='Добавление Продукта' user={user} basketCatalog={basketCatalog}>
            <div className="page">
            <section className="section-edit-product">
                <div className="container">
                    <div className="section-header">
                        <div className="section-header-title">
                            <h1 className="title">Изменить продукт</h1>
                        </div>
                    </div>
                    <div className="section-content-edit-product">
                        <form className="form-edit-product" data-id={catalogs.id} name="editProduct-form">
                            <label>Название продукта:</label><br />
                            <input name="name" type="text" value={catalogs.name} required /><br />

                            <label>Изображение подукта (URL):</label><br />
                            <input name="img" type="text" value={catalogs.img} required /><br />

                            <label>Категория продукта: </label><br />
                            <input name="category" type="text" value={catalogs.category} required /><br />

                            <label>Описание продукта: </label><br />
                            <input name="description" type="text" value={catalogs.description} required /><br />

                            <label>Атрибут продукта: </label><br />
                            <input name="attribute" type="text" value={catalogs.attribute} required/><br />

                            <label>Цена продукта: </label><br />
                            <input name="price" type="text" value={catalogs.price} required/><br />

                            <label>Скрыто (N - нет, Y - да):</label><br />
                            <p><select name="hide" value={catalogs.hide}>
                                <option>N</option>
                                <option>Y</option>
                            </select></p>
                            <button type="submit" className="edit-product-btn">Изменить</button>
                        </form>
                    </div>
                </div>
            </section>
            </div>
            <script defer src="/js/editProduct.js"></script>
        </Layout>
    );
}
module.exports = EditProduct;