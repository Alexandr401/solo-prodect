const React = require('react');
const Layout = require('../Layout');
function EditProduct({ user, basketCatalog, catalogs = [] }) {
    return (
        <Layout title='Добавление Продукта' user={user} basketCatalog={basketCatalog}>
            <div className="page">
            <section className="section-create-product">
                <div className="container">
                    <div className="section-header">
                        <div className="section-header-title">
                            <h1 className="title">Изменить продукт</h1>
                        </div>
                    </div>
                    <div className="section-content-edit-product-all">
                        {catalogs.map((catalog) => (
                            <li key={catalog.id} className="edit-catalog-inner">
                                <h2 className='edit-catalog-item-title'><a href={`/edit-product/${catalog.id}`} key={catalog.id}>{catalog.id}. {catalog.name}</a></h2>
                            </li>
                        ))}
                    </div>
                </div>
            </section>
            </div>
        </Layout>
    );
}
module.exports = EditProduct;