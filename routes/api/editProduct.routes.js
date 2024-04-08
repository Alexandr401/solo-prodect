const router = require('express').Router();
const { Catalog } = require('../../db/models');

router.post('/:id', async (req, res) => {
    try {
        const catalog = await Catalog.findByPk(req.params.id);
        if (catalog) {
            await catalog.update({
                category: req.body.category,
                img: req.body.img,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                attribute: req.body.attribute,
                hide: req.body.hide,
            });
        return res.status(201).json({ text: 'OK' });
        } else {
            res.status(404).send('Продукт не найден');
        }
    } catch (error) {
        res.status(500).send('Ошибка на сервере');
    }
});

module.exports = router;