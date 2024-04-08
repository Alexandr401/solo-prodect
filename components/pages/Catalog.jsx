const React = require('react');
const Layout = require('../Layout');
function Catalog({ catalogs = [], user, basketCatalog }) {
    return ( 
        <Layout title="Каталог" user={user} basketCatalog={basketCatalog}>
          <div className="page">
          <section className="section-catalog">
          <div className="menu-catalog">
              <a href={`/catalog`}>Все</a>
              <a href={`/catalog/krovati`}>Кровати</a>
              <a href={`/catalog/divani`}>Диваны</a>
              <a href={`/catalog/wkafi`}>Шкафы</a>
              <a href={`/catalog/tymbi`}>Тумбы</a>
              <a href={`/catalog/stoli`}>Столы</a>
              <a href={`/catalog/styliya`}>Стулья</a>
              <a href={`/catalog/kresla`}>Кресла</a>
            </div>
          <div className="container-catalog">
            <div className="section-header">
              <div className="section-header-title">
                <h1 className="title">Катагол</h1>
              </div>
            </div>
            <div className="section-content-catalog">
            <div className="catalog-basket">
              {catalogs.map((catalog) => (
                <li key={catalog.id} className="catalog-inner">
                    <h2 className='catalog-item-title'><a href={`/catalog/${catalog.id}`} key={catalog.id}>{catalog.name}</a></h2>
                    <p className='catalog-item-category'>Категория: {catalog.category}</p>
                    <img src={catalog.img} alt={catalog.name} className='catalog-item-img'/>
                    <p className='catalog-item-attribute'>Атрибут: {catalog.attribute}</p>
                    <p className='catalog-item-price'>Цена: {catalog.price.toFixed(2)}₽</p>
                </li>
              ))}
            </div> 
            </div>
          </div>
        </section>

        <div className="block-content-catalog">
        </div>
        </div>
      </Layout>
    );
};

module.exports = Catalog;