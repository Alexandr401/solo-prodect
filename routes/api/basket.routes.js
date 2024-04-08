const router = require("express").Router();
const { Basket, Order, User } = require("../../db/models");

router.route("/").post(async (req, res) => {
  const userId = req.session.userId;
  try {
    await User.update({ 
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      adresse: req.body.adresse,
    }, {
      where: { id: userId },
    });

    const order = await Order.create({ 
      userId: userId,
      items: req.body.items,
      totalPrice: req.body.totalPrice,
      payment: req.body.payment
    });

    await Basket.destroy({
      where: { userId: userId },
    });

    return res.status(200).json({ text: 'OK', orderId: order.id });
  } catch (e) {и
    res.status(500).end();
  }
});

router.route("/:id").post(async (req, res) => {
  try {
    const catalogId = req.params.id;
    console.log(req.session);
    const userId = req.session.userId;

    const userBasket = await Basket.findOne({
      where: { userId, catalogId },
    });

    if (userBasket) {
      return res.status(409).json({ text: "Уже в корзине" });
    } else {
      await Basket.create({ userId, catalogId });
      const updatedUserBasket = await Basket.findAll({
        where: { userId },
      });
      return res.status(200).json({ text: "OK", basket: updatedUserBasket });
    }   
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const catalogId = req.params.id;
    const userId = req.session.userId;

    const result = await Basket.destroy({
      where: { userId: userId, catalogId: catalogId },
    });

    if (result > 0) {
      const updatedUserBasket = await Basket.findAll({
        where: { userId },
      });
      return res.status(200).json({ text: "OK", basket: updatedUserBasket });
    }
    return res.status(404).json({ text: "Error" });
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

module.exports = router;