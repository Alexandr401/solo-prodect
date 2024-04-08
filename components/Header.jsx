const React = require('react')

function Header({ user, basketCatalog }) {
  return (
    <>
    <div className="header">
        <div className="menu">
            <a href="/" className="header-page-link">Home</a>
        </div>
        <div className="menu">
            <a href="/catalog" className="header-page-link">Каталог</a>
        </div>
        <div className="menu">
            <a href="/basket" className="header-page-link"><i class="fa-solid fa-basket-shopping"></i> <span>{user && (basketCatalog.length)}</span></a>
        </div>
        {user ? (
        <>
        <div className="menu">
            <a href="/profiles" className="header-page-link"><i class="fa-regular fa-user"></i> {user.name}</a>
        </div>
        <div className="menu">
            <a href="/api/auth/logout" id="signout" className="header-page-link">Выйти</a>
        </div>
        </>
        ) : (
        <>
        <div className="menu">
            <a href="/auth/login" id="login" className="header-page-link">Войти</a>
        </div>
        <div className="menu">
            <a href="/auth/register" id="signin" className="header-page-link">Зарегистрироваться</a>
        </div>
        </>
        )}
    </div>
    </>
  )
}
module.exports = Header;