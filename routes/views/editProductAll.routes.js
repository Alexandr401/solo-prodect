const router = require('express').Router();
const { User, Catalog, Basket } = require("../../db/models");
const EditProductAll = require('../../components/pages/EditProductAll');

router.route('/edit-product').get(async (req, res) => {
    const userId = req.session.userId;
    const user = await User.findByPk(userId);
    
    const catalogs = await Catalog.findAll({raw: true});

    const baskets = await Basket.findAll({
            where: { userId: userId },
            include: [Catalog]
        });
    
    const basketCatalog = baskets.map(basket => basket.Catalog);
    

    res.send(res.renderComponent(EditProductAll, { user, basketCatalog, catalogs}))
});

module.exports = router;