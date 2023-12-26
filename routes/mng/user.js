const db = require('../../lib/db');
const userApi = require('express').Router();

userApi.post('', function(req, res){ 
    var data = req.body;

    if(data.name == ''){
        res.status(401).json({result:false, msg: '잘못된 접근입니다. name', jwt: data.token});
    } else if(data.fruit == ''){
        res.status(401).json({result:false, msg: '잘못된 접근입니다. fruit', jwt: data.token});
    }

    var sql = 'insert into test (name, msg) values(?, ?)';
    var params = [data.name, data.fruit];
    db.query(sql, params, function(err, rows){
        if(err) res.status(401).json({result: false});
        console.log(rows.insertId);
        res.status(200).json({result: true, data: rows.insertId, msg: '추가되었습니다.', jwt: data.token});
    });
});


module.exports = userApi;

