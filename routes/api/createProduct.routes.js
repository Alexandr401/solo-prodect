const router = require('express').Router();
const { Catalog } = require('../../db/models');

router.post('/create-roduct', async (req, res) => {
  try {
      await Catalog.create({
        name: req.body.name,
        img: req.body.img,
        category: req.body.category,
        description: req.body.description,
        attribute: req.body.attribute,
        price: req.body.price
      });
      return res.status(201).json({ text: 'OK' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;