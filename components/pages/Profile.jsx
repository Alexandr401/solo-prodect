const React = require('react');
const Layout = require('../Layout');
const StarsRating = require('../StarsRating');
function Profile({ user, admin, myOrders, myComments, basketCatalog}) {
    return ( 
        <Layout title="Профиль" user={user} basketCatalog={basketCatalog}>

<div className="page">
          <section className="section-catalog">
          <div className="container">
            <div className="section-header">
              <div className="section-header-title">
                <h1 className="title">Профиль</h1>
              </div>
            </div>
            {admin && (
                <>
                <div className="setting">
                <a href="/create-product" className="addProduct">Добавить товар</a>
                <a href="/edit-product" className="editProduct">Изменить товар</a>
                </div>
                </>
            )}
            <div className="block-content-profile">
                <div className="block-content-qrder">
                <div className='content-order'>
                    <h2 className='content-order-title'>Мои заказы</h2>
                    {myOrders.map((order) => (
                        <>  
                            <div className='order-items'>
                            <ul className='order-item'>
                                {order.items.map(item => (
                                    <li>
                                        <p className='order-item-name'><a href={`/catalog/${item.catalogId}`}>{item.name}</a> x <span>{item.quantity}</span></p> 
                                    </li>
                                ))}
                            </ul>
                            <p className='order-item-totalPrice'>Общая сумма: <span>{order.totalPrice}</span></p>
                            <p className='order-item-payment'>Оплата: <span>{order.payment}</span></p>
                            </div>
                        </>
                    ))}
                </div>
                </div>
                <div className="block-content-my-comment">
                <div className='content-comment'>
                    <h2 className='content-comment-title'>Мои Коменты</h2>
                    {myComments.map((commentItem) => (
                        <>
                        <ul className='order-item'>
                            <li key={commentItem.id}>
                                <p className='order-item-name'><a href={`/catalog/${commentItem.Catalog.id}`}>{commentItem.Catalog.name}</a><StarsRating estimation={commentItem.estimation} /></p>
                                <p className='order-item-comment'>Комментарий: <span>{commentItem.comment}</span></p>
                            </li>
                        </ul>
                        </>
                    ))}
                </div>
                </div>
            </div>
          </div>
        </section>
        </div>
        </Layout>
    );
};

module.exports = Profile;