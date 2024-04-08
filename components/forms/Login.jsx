const React = require('react');
const Layout = require('../Layout');

function Login() {
    return (
        <Layout title='Авторизация'>
        <div className="auth-block">
            <div className="auth-content">
            <h1>Авторизация</h1>
            <form className="form-auth" name="log-form">
                <p className="error-auth">*Неверный логин или пароль!</p>
                <label>Почта:</label><br />
                <input name="email" type="email" required /><br />
                <label>Пароль: </label><br />
                <input name="password" type="password" required /><br />
                <button type="submit" className="autn-btn">Войти</button>
            </form>
            </div>
        </div>
        <script defer src="/js/login.js"></script>
        </Layout>
    );
}

module.exports = Login;
