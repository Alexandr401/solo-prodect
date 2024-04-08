const React = require('react');
const Layout = require('../Layout');
const StarsRating = require('../StarsRating');

function Furniture({ catalog, user, isBasket, comments = [], basketCatalog  }) {
    return ( 
    <Layout title={catalog.name} user={user} basketCatalog={basketCatalog} >
        <div className="page">
          <section className="section-catalog">
          <h3 className='downLink'><i class="fa-solid fa-left-long"></i> Назад</h3>
          <div className="container">
            <div className="section-header">
              <div className="section-header-title">
                <h1 className="title">{catalog.name} <StarsRating estimation={comments.reduce((acc, comment) => acc + comment.estimation, 0) / comments.length} /></h1>
              </div>
            </div>
            <div className="furniture-info">
                <img src={catalog.img} alt={catalog.name} className='furniture-item-img' />
                <p className='catalog-item-category'>Категория: {catalog.category}</p>
                <p className='furniture-item-attribute'>Атрибут: {catalog.attribute}</p>
                <p className='furniture-item-description'>Описание: {catalog.description}</p>
                <p className='catalog-item-price'>Стоимость: {catalog.price.toFixed(2)}₽</p>
                {user && (
                <>
                    {isBasket && (
                    <div className="unBas-block">
                        <button className="unBasBtn" data-id={catalog.id} type="submit">Удалить из корзины</button>
                    </div>
                    )}
                    {!isBasket && (
                    <div className="Bas-block">
                        <button className="basBtn" data-id={catalog.id} type="submit">В корзину</button>
                    </div>
                    )}
                </>
                )}
            </div>
            <div className="block-content-furniture">
                {user ? (
                <div className="block-content-comment">
                <form className="form-comment" name="comment-form" data-id={catalog.id}>
                    <h3>Добавить комендарий:</h3>
                    <p className="user-star">Оценка:</p>
                    <div className="rating">
                        <span className="star" data-value="5">&#9733;</span>
                        <span className="star" data-value="4">&#9733;</span>
                        <span className="star" data-value="3">&#9733;</span>
                        <span className="star" data-value="2">&#9733;</span>
                        <span className="star" data-value="1">&#9733;</span>
                    </div>
                    <p className="user-comment">Комментарий:</p>
                    <textarea name="comment" placeholder="Добавьте ваш комментарий" required />
                    <button type="submit" className="comment-btn">Отправить</button>
                </form>
                </div>
                ) : (
                    <div className="comment-error">
                    <h3>Чтобы добавить комендарий авторизуйтесь!</h3>
                </div>
                )}
                <h3>Комментарии людей:</h3>
                <div className="block-content-comment-users">
                    {comments.map(comment => (
                        <div key={comment.id} className='comment-users-item'>
                            <h2>{comment.User.name} <StarsRating estimation={comment.estimation} /></h2>
                            <h3>Комментарий:</h3>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>
        </div>
    
    </Layout>
    );
};

module.exports = Furniture;