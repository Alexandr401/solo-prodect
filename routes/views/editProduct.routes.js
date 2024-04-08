const router = require('express').Router();
const { User, Catalog, Basket } = require("../../db/models");
const EditProduct = require('../../components/forms/EditProduct');

router.route('/:id').get(async (req, res) => {
    const catalogs = await Catalog.findByPk(req.params.id);
    const userId = req.session.userId;
    const user = await User.findByPk(userId);
    const baskets = await Basket.findAll({
        where: { userId: userId },
        include: [Catalog]
    });

    const basketCatalog = baskets.map(basket => basket.Catalog);
    res.send(res.renderComponent(EditProduct, { catalogs, user, basketCatalog }));
});

module.exports = router;