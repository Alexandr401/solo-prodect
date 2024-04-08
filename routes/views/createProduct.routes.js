const router = require('express').Router();
const { User, Catalog, Basket } = require("../../db/models");
const CreateProduct = require('../../components/forms/CreateProduct');

router.route('/create-product').get(async (req, res) => {
    const userId = req.session.userId;
    const user = await User.findByPk(userId);
    
    const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
        });
    
    const basketCatalog = baskets.map(basket => basket.Catalog);
    

    res.send(res.renderComponent(CreateProduct, { user, basketCatalog }))
});

module.exports = router;