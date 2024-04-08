const React = require('react');
const Layout = require('../Layout');
function Home({title, user, basketCatalog }) {
    return ( 
      <Layout title={title} user={user} basketCatalog={basketCatalog}>
<div className="page">
<section className="section-top">
	<div className="container section-top-container">
		<div className="section-top-inner">
			<h1 className="section-top-title">Avrora</h1>
			<h3 className="section-top-subtitle">Обустройте свой дом с любовью и комфортом</h3>
		</div>
	</div>
	<div className="section-down-container">
		<div className="basis-inner">
			<div className="basis-item">
				<p><b>01</b>&nbsp;Качество</p>
			</div>
			<div className="basis-item">
				<p><b>02</b>&nbsp;Отзывчивость</p>
			</div>
			<div className="basis-item">
				<p><b>03</b>&nbsp;Разнообразие товаров</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<div className="section-header">
			<div className="section-header-title">
				<h1 className="title">Главная</h1>
			</div>
		</div>

		<div className="section-content">
			<div className="section-content-text">
				<p className="content-text">Добро пожаловать в мир комфорта и стиля от Avrora. Мы предлагаем широкий выбор мебели, которая превратит ваш дом в уютное и стильное пространство. От современных диванов до классических кресел, от элегантных обеденных столов до функциональных шкафов — у нас есть все, что вам нужно, чтобы создать дом своей мечты.</p>
				<p className="content-text">Наша мебель изготовлена из высококачественных материалов и отличается безупречным мастерством. Мы верим, что ваш дом должен быть отражением вашего стиля и индивидуальности, поэтому мы предлагаем широкий выбор дизайнов и отделок на любой вкус.</p>
				<p className="content-text"> Наши опытные консультанты помогут вам выбрать идеальную мебель для вашего дома и создать пространство, которое вы будете любить.</p>
			</div>
		</div>
	</div>
	<div className="section-content-down">
		<div className="content-down-inner">
			<div className="content-down-item">
			<p className="content-down-img"><i class="fa-regular fa-handshake"></i></p><p>Широкий ассортимент «сквозных» коллекций.</p>
			</div>
			<div className="content-down-item">
			<p className="content-down-img"><i class="fa-solid fa-swatchbook"></i></p><p>Широкий ассортимент цветов.</p>
			</div>
			<div className="content-down-item">
			<p className="content-down-img"><i class="fa-solid fa-hand-holding-heart"></i></p><p>Безопасна для здоровья и окружающей среды.</p>
			</div>
		</div>
	</div>
</section>

<section className="section">
	<div className="container">
		<div className="section-header">
			<div className="section-header-title">
				<h1 className="title">О компании</h1>
			</div>
		</div>
		<div className="section-content">
			<div className="section-content-text">
				<p className="content-text">Мы гордимся тем, что предлагаем нашим клиентам широкий выбор стильной и функциональной мебели, которая создает уютные и стильные пространства.</p>
				<p className="content-text">Наша команда опытных дизайнеров и мастеров неустанно работает над созданием мебели, которая не только красива, но и долговечна. Мы используем только лучшие материалы и уделяем большое внимание каждой детали, чтобы обеспечить исключительное качество.</p>
				<p className="content-text">Мы понимаем, что ваш дом — это ваше убежище, поэтому мы стремимся предоставлять нашим клиентам мебель, которая сделает их дома более комфортными, стильными и функциональными. Мы верим, что каждый заслуживает того, чтобы жить в доме, который он любит.</p>
				<p className="content-text">Мы гордимся тем, что являемся надежным источником мебели для наших клиентов. Мы стремимся к тому, чтобы каждый покупатель был доволен своей покупкой, и предоставляем исключительное обслуживание клиентов.</p>
				<p className="content-text">Avrora с нетерпением ждет возможности помочь вам создать дом своей мечты.</p>
			</div>
		</div>
	</div>
</section>

<footer className="footer-page">
	<div className="container footer-page-container">
					<a href="#" className="socseti">
						<i className="fa fa-vk" aria-hidden="true"></i>
					</a>
					<a href="#" className="socseti">
						<i className="fa fa-facebook" aria-hidden="true"></i>
					</a>
					<a href="#" className="socseti">
						<i className="fa fa-instagram" aria-hidden="true"></i>
					</a>
					<a href="#" className="socseti">
						<i className="fa fa-twitter" aria-hidden="true"></i>
					</a>
	</div>
	<div className="footer-copyrating">
		<p>Avrora © Copyright, 2024</p>
	</div>
</footer>
</div>

      </Layout>
    );
};

module.exports = Home;
