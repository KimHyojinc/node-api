require("dotenv").config();

const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretkey').secretKey;

async function checkAuth(req, res, next) {
    const authHeader = req.get("Authorization");
    if (!(authHeader && authHeader.startsWith("Bearer "))) {
        return res.status(401).json({ message: "인증 에러(header)" });
    }
    if (req.get("Authorization").split(' ')[1] != secretKey) {
        return res.status(401).json({ message: "인증 에러(authorization)" });
    }
    let token = jwt.sign({ ...req.body }, secretKey);
    //   return res.status(200).json({age: 'gra', ...req.body, token: token});
    try {
        let payload = jwt.verify(token, secretKey);
        if (payload) {
            req.body.token = token;
            // req.headers.level = String(userInfo.level);
            next();
        } else {
            return res.status(401).json({ message: "인증 에러(body)" });
        }
    } catch (error) {
        return res.status(401).json({ message: "인증 에러(token)" });
    }
}

module.exports = checkAuth;


