const router = require('express').Router();
const Baskets = require('../../components/pages/Basket');
const { Catalog, User, Basket} = require('../../db/models');

router.route('/').get(async (req, res, next) => {
  try {
    const userId = req.session.userId;
    const user = await User.findByPk(userId);
    
    if (user) {
      const baskets = await Basket.findAll({
        where: { userId: userId },
        include: [Catalog]
      });
        
      const basketCatalog = baskets.map(basket => basket.Catalog);

      const totalPrice = await Basket.sum('price', {
        include: [{
            model: Catalog,
            attributes: [],
          }],
          where: { userId: userId }
      });
      return res.send(res.renderComponent(Baskets, { user, basketCatalog, totalPrice }));
    } else {
      return res.send(res.renderComponent(Baskets, { user }));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

