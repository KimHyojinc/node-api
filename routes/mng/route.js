const checkAuth = require('../../lib/jwt');
const userAPI = require('./user');

const mngRouter = require('express').Router();

// 쿼리 사용 문서 참고
// https://gist.github.com/livelikeabel/909d5dc35e96e3f0bed0cd28cddcdeaf
mngRouter.use('/user', checkAuth, userAPI);

module.exports = mngRouter;