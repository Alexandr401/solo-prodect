const React = require('react');
const Layout = require('../Layout');

function Registration() {
    return (
        <Layout title='Регистрация'>
        <div className="reg-block">
        <div className="reg-content">
        <h1>Регистрация</h1>
        <p className="error-reg"></p>
        <form className="form-reg" name="reg-form">
            <label>Почта:</label><br />
            <input name="email" type="email" required /><br />
            <label>Имя:</label><br />
            <input name="name" type="text" required /><br />
            <label>Пароль: </label><br />
            <input name="password" type="password" required /><br />
            <label>Повторите пароль: </label><br />
            <input name="password2" type="password" required /><br />
            <button type="submit" className="reg-btn">Зарегистрироваться</button>
        </form>
        </div>
        </div>
        <script defer src="/js/register.js"></script>
        </Layout>
    );
}

module.exports = Registration;