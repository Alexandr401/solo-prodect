const router = require("express").Router();
const { Comment } = require("../../db/models");

router.route("/:id").post(async (req, res) => {
  try {
    const catalogId = req.params.id;
    console.log(req.session);
    const userId = req.session.userId;
        await Comment.create({ 
            estimation: req.body.rating,
            comment: req.body.comment,
            userId: userId,
            catalogId: catalogId, 
        });
      return res.status(200).json({ text: 'OK' });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

module.exports = router;