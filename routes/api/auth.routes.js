const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models/index');

router.post('/register', async (req, res) => {
    try {
      const oneUser = await User.findOne({ where: { email: req.body.email } });
      if (oneUser) {
        return res.status(500).json({ error: 'Пользователь с таким email уже существует.' });
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      });
  
      if (newUser) {
        req.session.userId = newUser.id;
        return res.status(201).json({ text: 'OK' });
      } else {
        return res.status(500).json({ error: 'Не удалось создать пользователя.' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

router.route('/login').post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    
    if (user.id) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        req.session.userId = user.id;
        return res.status(200).json({ text: 'OK' });
      }
      return res.status(401).json({ error: 'Login Data is incorrect' });
    }
    return res.status(401).json({ error: 'Login Data is incorrect' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.route('/logout').get((req, res) => {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ error: 'Log out Failed' });
      }
      return res.clearCookie('web-avrora').redirect('/');
    });
});

module.exports = router;