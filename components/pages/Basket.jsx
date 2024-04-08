const React = require('react');
const Layout = require('../Layout');

function Basket({ user, basketCatalog, totalPrice }) {
  return (
    <Layout title="Корзина" user={user} basketCatalog={basketCatalog}>
        <div className="page">
          <section className="section-catalog">
          <div className="container">
            <div className="section-header">
              <div className="section-header-title">
                <h1 className="title">Корзина</h1>
              </div>
            </div>
            <div className="block-content-basket">
            <div className="basket-info">
              <ul>
                {basketCatalog && basketCatalog.map((catalog) => (
                  <li key={catalog.id} className="basket-item">
                  <h2 className='catalog-item-title'><a href={`/catalog/${catalog.id}`} data-id={catalog.id} className='nameFurniture'>{catalog.name}</a></h2>
                  <p className="price" data-id={catalog.id}>{catalog.price.toFixed(2)}₽</p>
                  <div className="control-btn">
                      <button className="downQantBtn" data-id={catalog.id} type="submit"><i class="fa-solid fa-minus"></i></button>
                          <span className="total" data-id={catalog.id}>1</span>
                      <button className="uppQantBtn" data-id={catalog.id} type="submit"><i class="fa-solid fa-plus"></i></button>
                  </div>
                  <div className="unBas-block">
                      <button className="delBasBtn" data-id={catalog.id} type="submit"><i class="fa-solid fa-delete-left"></i></button>
                  </div>
              </li>
                ))}
              </ul>
          </div>
          </div>
            <div className="block-content-basket-form">
                {totalPrice ? (
                <>
                <h4 className="content-totalPrice">Общая сумма: <span className="totalPrice">{totalPrice.toFixed(2)}</span>₽</h4>
                <div className="content-form-basket">
                <form className="form-basket" name="basket-form">
                  <label>Почта:</label><br />
                  <input name="email" type="email" value={user.email} required /><br />
                  <label>Имя:</label><br />
                  <input name="name" type="text" value={user.name} required /><br />
                  <label>Телефон:</label><br />
                  <input name="phone" type="phone" value={user.phone} maxlength="18" data-phone-pattern='+7 (___) ___-__-__'  /><br />
                  <label>Адрес</label><br />
                  <input name="adresse" type="text" value={user.adresse} required /><br />
                  <label>Оплата:</label><br />
                  <span>Онлайн</span> <input name="payment" value="Онлайн" type="radio" required /><br />
                  <span>При получении</span> <input name="payment" value="При получении" type="radio" /><br />
                  <button type="submit" className="payment-btn">Заказать</button>
                </form>
                </div>
                </>
                ) : (
                <>
                <h4 className='totalPriceNull'>Корзина пустая :C</h4>
                </>
                )}
            </div>
          </div>
        </section>
        </div>
      

    </Layout>
  );
};

module.exports = Basket;