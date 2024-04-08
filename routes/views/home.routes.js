const router = require('express').Router();
const { Catalog, User, Basket} = require('../../db/models');
const Home = require('../../components/pages/Home');

router.route('/').get(async (req, res) => {
  const { limit: pageSize, offset: page } = req.query;
  let limit;
  let offset;
  try {
    if (!pageSize || !page) {
      limit = 10;
      offset = 0;
    } else {
      limit = pageSize;
      offset = page;
    }
    if (Number.isNaN(+limit) || Number.isNaN(+offset)) {
      return res.status(400).json({ error: 'Query parameters must be type of number' });
    }
    const userId = req.session.userId;
    const user = await User.findByPk(userId);
    
    if (user) {
      const baskets = await Basket.findAll({
        where: { userId: userId },
        include: [Catalog]
      });
        
      const basketCatalog = baskets.map(basket => basket.Catalog);
    return res.send(res.renderComponent(Home, {title: "Home", user, basketCatalog}));
  }
  return res.send(res.renderComponent(Home, {title: "Home", user}));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
