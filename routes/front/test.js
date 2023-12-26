const testApi = require('express').Router();
const db = require('../../lib/db');

testApi.post('', function(req, res){
    var data = req.body;
    db.query('select * from test', (err, rows) => {
        if(err) throw err;
        console.log('test', rows);
        res.status(200).json({result: true, data: rows, msg: '검색.', jwt: data.token});
    });
});

module.exports = testApi;