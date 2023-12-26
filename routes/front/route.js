const checkAuth = require('../../lib/jwt');
const testApi = require('./test');
const userAPI = require('./user');

const frontRouter = require('express').Router();

// 쿼리 사용 문서 참고
// https://gist.github.com/livelikeabel/909d5dc35e96e3f0bed0cd28cddcdeaf
frontRouter.use('/user', checkAuth, userAPI);
frontRouter.use('/test', checkAuth, testApi);

module.exports = frontRouter;