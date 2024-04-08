const router = require('express').Router();
const Profile = require('../../components/pages/Profile');
const { Catalog, User, Order, Basket, Comment } = require('../../db/models');

router.route('/').get(async (req, res, next) => {
  try {
    const userId = req.session.userId;
    const user = await User.findByPk(userId);

    if (user) {
    
    const myOrders = await Order.findAll({
        where: { userId: userId },
    });

    const myComments = await Comment.findAll({
        where: { userId: userId },
        include: [Catalog]
    });

    const baskets = await Basket.findAll({
        where: { userId: userId },
        include: [Catalog]
    });
    
    const comments = await Comment.findAll({
      // where: { catalogId: catalogId },
      include: [{
        model: User,
        attributes: ['name'],
      }]
    });
    
    const basketCatalog = baskets.map(basket => basket.Catalog);

    const admin = (user.email === '123@ad.ru');

    return res.send(res.renderComponent(Profile, { user, myOrders, myComments, comments, basketCatalog, admin }));
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

