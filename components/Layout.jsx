const React = require('react');
const Header = require('./Header')
function Layout({ title = 'Home', user, children, basketCatalog }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <script defer src="/js/comments.js"></script>
        <script defer src="/js/basket.js"></script>
        <script defer src="/js/catalog.js"></script>
        <script defer src="/js/maskphone.js"></script>
        <script src="https://kit.fontawesome.com/ee8c22e7c7.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/css/auth.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Mono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon.png" />
      </head>
      <body>
        <Header user={user} basketCatalog={basketCatalog} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;