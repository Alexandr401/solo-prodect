const React = require("react");
const Layout = require("../Layout");

function PageNotFound() {
  return (
    <Layout>

<div className="page">
            <section className="section-create-product">
                <div className="container">
                    <div className="section-header">
                        <div className="section-header-title">
                            <h1 className="title">404 Страница не найдена</h1>
                        </div>
                    </div>
                    <div className="content-not-found">
                        <a href="/">Вернуться на глывную страницу</a>
                    </div>
                </div>
            </section>
            </div>

    </Layout>
  );
}

module.exports = PageNotFound;