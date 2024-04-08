const router = require("express").Router();
const { Catalog, User, Basket, Comment} = require("../../db/models");
const Furniture = require("../../components/pages/Furniture");

router.route("/:id").get(async (req, res) => {
  const catalogId = req.params.id;
  const catalog = await Catalog.findByPk(catalogId);
  const userId = req.session.userId;
  const user = await User.findByPk(userId);
  const comments = await Comment.findAll({
    where: { catalogId: catalogId },
    include: [{
      model: User,
      attributes: ['name'],
    }]
  });

  if (user) {
    const baskets = await Basket.findAll({
      where: { userId: userId },
      include: [Catalog]
    });
      
    const basketCatalog = baskets.map(basket => basket.Catalog);
    const flag = await Basket.findOne({
      where: { userId: user.id, catalogId: catalogId },
    });
    res.send(res.renderComponent(Furniture, { catalog, user, basketCatalog, isBasket: !!flag, comments }));
  }
  if (!user) {
    res.send(res.renderComponent(Furniture, { catalog, comments }));
  }
});
module.exports = router;