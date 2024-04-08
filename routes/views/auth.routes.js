const router = require('express').Router();
const Registration = require('../../components/forms/Registration');
const Login = require('../../components/forms/Login');

router.route('/register').get(async (_, res) => res.send(res.renderComponent(Registration)));
router.route('/login').get(async (_, res) => res.send(res.renderComponent(Login)));

module.exports = router;
